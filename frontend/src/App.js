import React, { useState, useEffect } from 'react';
import { 
    FileText, Search, Clock, CheckCircle, AlertTriangle, Upload, 
    Send, Phone, MessageCircle, ArrowLeft, Home, Plus, Eye, 
    Train, ChevronDown, Activity, Star, Bell, Settings,
    Calendar, User, Filter, Download, Share2, ExternalLink,
    Zap, Shield, Globe, TrendingUp, Award, Heart, Mail
} from 'lucide-react';
import { 
    CATEGORY_KEYWORDS, 
    ANALYSIS_CONFIG, 
    PRIORITY_WEIGHTS, 
    DEFAULT_ASSIGNMENTS 
} from './constants';

// --- Enhanced Clean UI Components ---
// Smart Category Suggestion System - Based on Railway Complaint Rules


// Advanced text analysis functions
// Enhanced text analysis function with subcategory and department assignment
const analyzeComplaintText = (text) => {
    if (!text || text.length < 20) return null;
    
    const normalizedText = text.toLowerCase();
    const allSuggestions = [];
    
    // Analyze each category and its subcategories
    Object.entries(CATEGORY_KEYWORDS).forEach(([categoryName, categoryData]) => {
        categoryData.subcategories.forEach(subcategory => {
            let matchCount = 0;
            let matchedKeywords = [];
            let strongMatches = 0;
            let totalMatchScore = 0; // New: weighted scoring
            
            // Check for keyword matches with weighted scoring
            subcategory.keywords.forEach(keyword => {
                if (normalizedText.includes(keyword.toLowerCase())) {
                    matchCount++;
                    matchedKeywords.push(keyword);
                    
                    // Weight longer keywords higher (more specific)
                    let keywordWeight = 1;
                    if (keyword.length > 15) keywordWeight = 3;      // Very specific
                    else if (keyword.length > 10) keywordWeight = 2;  // Moderately specific
                    else if (keyword.length > 5) keywordWeight = 1.5; // Somewhat specific
                    
                    totalMatchScore += keywordWeight;
                    
                    // Count as strong match if keyword is longer (more specific)
                    if (keyword.length > 8) {
                        strongMatches++;
                    }
                }
            });
            
            // New improved confidence calculation
            if (matchCount > 0) {
                // Base confidence from category confidence
                let baseConfidence = categoryData.confidence;
                
                // Boost based on number of matches
                let matchBonus = Math.min(matchCount * 0.15, 0.6); // Max 60% bonus
                
                // Boost based on weighted score
                let weightBonus = Math.min(totalMatchScore * 0.1, 0.4); // Max 40% bonus
                
                // Strong match bonus
                let strongBonus = strongMatches > 0 ? 0.1 : 0;
                
                // Calculate final confidence (capped at 1.0)
                const finalConfidence = Math.min(
                    baseConfidence + matchBonus + weightBonus + strongBonus,
                    1.0
                );
                
                // Much lower threshold - only need basic match
                if (finalConfidence > 0.6) { // Lowered from 0.4
                    allSuggestions.push({
                        category: categoryName,
                        subcategory: subcategory.name,
                        department: subcategory.departments[0],
                        allDepartments: subcategory.departments,
                        confidence: finalConfidence,
                        matchedKeywords,
                        matchCount,
                        strongMatches,
                        totalMatchScore, // Add this for debugging
                        priority: categoryData.priority
                    });
                }
            }
        });
    });
    
    // Sort by confidence and priority
    allSuggestions.sort((a, b) => {
        if (a.priority === 'critical' && b.priority !== 'critical') return -1;
        if (b.priority === 'critical' && a.priority !== 'critical') return 1;
        if (a.priority === 'high' && b.priority !== 'high') return -1;
        if (b.priority === 'high' && a.priority !== 'high') return 1;
        return b.confidence - a.confidence;
    });
    
    // Return top suggestion with much lower threshold
    const topSuggestion = allSuggestions.length > 0 ? allSuggestions[0] : null;
    
    // Lowered final threshold significantly
    if (topSuggestion && topSuggestion.confidence > 0.7) { // Changed from 0.5
        return topSuggestion;
    }
    
    return null;
};

// Enhanced category selection with smart suggestions
// Enhanced description textarea with analysis state tracking
const SmartDescriptionTextarea = ({ formData, handleFormChange, onTextAnalysis }) => {
    const [analysisTimeout, setAnalysisTimeout] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [hasAnalyzed, setHasAnalyzed] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    
    const handleDescriptionChange = (e) => {
        const value = e.target.value;
        handleFormChange(e);
        setWordCount(value.trim().split(/\s+/).filter(word => word.length > 0).length);
        
        // Reset analysis state when text changes
        setHasAnalyzed(false);
        
        // Clear existing timeout
        if (analysisTimeout) {
            clearTimeout(analysisTimeout);
        }
        
        // Set analyzing state
        setIsAnalyzing(true);
        
        // Set new timeout for analysis (debounce)
        const newTimeout = setTimeout(() => {
            setIsAnalyzing(false);
            setHasAnalyzed(true);  // ✅ Set local analyzed state
            onTextAnalysis(value, true); // ✅ Pass both value and analyzed flag
        }, 1000); // Analyze after 1 second of no typing
        
        setAnalysisTimeout(newTimeout);
    };
    
    return (
        <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description
                <span className="text-red-500 ml-1">*</span>
                {isAnalyzing && (
                    <span className="ml-2 text-xs text-blue-600">
                        <div className="inline-flex items-center space-x-1">
                            <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                            <span>Analyzing text...</span>
                        </div>
                    </span>
                )}
                {hasAnalyzed && !isAnalyzing && (
                    <span className="ml-2 text-xs text-green-600">
                        ✓ Analysis complete
                    </span>
                )}
            </label>
            
            <div className="relative">
                <textarea 
                    id="description" 
                    value={formData.description} 
                    onChange={handleDescriptionChange} 
                    rows="5" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all duration-300" 
                    placeholder="Provide all relevant details including date, time, location, and specific issues you encountered. Our AI will analyze your text to suggest the most appropriate category."
                    required
                />
                
                {/* Word count and analysis status */}
                <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white px-2 py-1 rounded">
                    {wordCount} words
                    {formData.description.length > 20 && !isAnalyzing && hasAnalyzed && (
                        <span className="ml-2 text-green-600">✓ Analyzed</span>
                    )}
                </div>
            </div>
            
            {/* Writing hints */}
            <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
                <strong>💡 Tip:</strong> Include specific keywords like "heart attack", "emergency", "fire", "refund", "food quality" etc. to help our AI suggest the best category for faster resolution.
            </div>
        </div>
    );
};

// Smart suggestion component
// Auto Category Display Component (replaces dropdown)
const AutoCategoryDisplay = ({ detectedCategory, hasAnalyzedText }) => {
    return (
        <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
                <span className="text-red-500 ml-1">*</span>
                <span className="ml-2 text-xs text-gray-500 font-normal">
                    (Auto-detected from description)
                </span>
            </label>
            
            <div className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 min-h-[52px] flex items-center justify-between">
                {detectedCategory ? (
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-bold text-green-800">
                                Category: {detectedCategory.category}
                            </span>
                        </div>
                        <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                            Auto-detected
                        </div>
                        {detectedCategory.priority === 'critical' && (
                            <div className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full animate-pulse">
                                CRITICAL PRIORITY
                            </div>
                        )}
                    </div>
                ) : hasAnalyzedText ? (
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <span className="font-medium text-orange-800">Category: To be assigned</span>
                        </div>
                        <div className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                            Manual review needed
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-500">Waiting for description analysis...</span>
                    </div>
                )}
            </div>
            
            {detectedCategory && (
                <div className="mt-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                        <div className="p-1 bg-green-100 rounded-lg">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-green-800 text-sm">Auto-Assignment Details</h4>
                            <p className="text-green-700 text-sm mt-1">
                                <strong>Subcategory:</strong> {detectedCategory.subcategory}
                            </p>
                            <p className="text-green-700 text-sm">
                                <strong>Assigned To:</strong> {detectedCategory.department}
                            </p>
                            {/* <p className="text-green-700 text-sm">
                                <strong>Priority:</strong> {detectedCategory.priority?.toUpperCase() || 'MEDIUM'}
                            </p>
                            <p className="text-green-700 text-sm">
                                <strong>Confidence:</strong> {Math.round(detectedCategory.confidence * 100)}%
                            </p> */}
                            {/* <div className="text-xs text-green-600 mt-2">
                                <span>Matched keywords: </span>
                                <span className="font-medium">
                                    {detectedCategory.matchedKeywords.slice(0, 3).join(', ')}
                                    {detectedCategory.matchedKeywords.length > 3 && ` +${detectedCategory.matchedKeywords.length - 3} more`}
                                </span>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
            
            {hasAnalyzedText && !detectedCategory && (
                <div className="mt-3 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                        <div className="p-1 bg-orange-100 rounded-lg">
                            <AlertTriangle className="h-4 w-4 text-orange-600" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-orange-800 text-sm">Manual Assignment Required</h4>
                            <p className="text-orange-700 text-sm mt-1">
                                Our system couldn't automatically categorize your complaint. It will be manually reviewed and assigned to the appropriate department.
                            </p>
                            <div className="text-xs text-orange-600 mt-2">
                                <span>💡 Tip: Try adding specific keywords like "heart attack", "emergency", "fire" etc. for faster auto-assignment.</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


const StatCard = ({ icon, label, value, color, trend }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
        <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg bg-${color}-50 text-${color}-600`}>
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-500 font-medium">{label}</p>
                <p className="text-xl font-bold text-gray-800">{value}</p>
                {trend && (
                    <div className="flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                        <span className="text-xs text-green-600 font-medium">{trend}</span>
                    </div>
                )}
            </div>
        </div>
    </div>
);

const HowItWorksCard = ({ icon, step, title, description }) => (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
        <div className="relative mb-4">
            <div className="bg-indigo-100 text-indigo-600 rounded-xl p-4">
                {icon}
            </div>
            <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {step}
            </div>
        </div>
        <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const ComplaintCard = ({ complaint, onSelect, isVertical = false }) => {
    const statusStyles = {
        'In Progress': 'bg-orange-50 text-orange-700 border-orange-200',
        'Resolved': 'bg-green-50 text-green-700 border-green-200',
        'Submitted': 'bg-blue-50 text-blue-700 border-blue-200',
        'Escalated': 'bg-red-50 text-red-700 border-red-200',
    };

    return (
        <div 
            className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-indigo-200 ${
                isVertical ? 'p-4' : 'p-6'
            }`}
            onClick={() => onSelect(complaint.id)}
        >
            <div className={`${isVertical ? 'flex items-center justify-between' : 'space-y-3'}`}>
                <div className={isVertical ? 'flex-1' : ''}>
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-bold text-indigo-600">{complaint.id}</p>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${statusStyles[complaint.status] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                            {complaint.status}
                        </span>
                    </div>
                    <h4 className={`font-bold text-gray-800 ${isVertical ? 'text-base' : 'text-lg'} ${isVertical ? '' : 'truncate'}`}>
                        {complaint.title}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <p className="text-sm text-gray-500">{complaint.category}</p>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{complaint.date}</span>
                    </p>
                </div>
                {isVertical && (
                    <div className="ml-4">
                        <Eye className="h-5 w-5 text-gray-400 hover:text-indigo-600 transition-colors" />
                    </div>
                )}
            </div>
        </div>
    );
};

const TimelineItem = ({ item, isLast }) => (
    <div className="relative pl-8 pb-6">
        <div className="absolute left-0 top-0 flex flex-col items-center">
            <div className={`w-4 h-4 rounded-full border-2 border-white shadow-md ${
                item.completed ? 'bg-indigo-600' : 'bg-gray-300'
            }`}>
                {item.completed && <CheckCircle className="w-2 h-2 text-white m-auto mt-0.5" />}
            </div>
            {!isLast && (
                <div className={`w-0.5 h-full mt-2 ${
                    item.completed ? 'bg-indigo-600' : 'bg-gray-300'
                }`} style={{minHeight: '2rem'}}></div>
            )}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className={`font-bold ${item.completed ? 'text-gray-800' : 'text-gray-500'}`}>
                {item.action}
            </p>
            <p className="text-gray-600 text-sm mt-1">{item.details}</p>
            
            {/* ✅ Add remark section for Investigation & Resolution */}
            {item.remark && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-xs font-medium text-gray-500 mb-1">Remark:</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.remark}</p>
                </div>
            )}
            
            <div className="flex items-center mt-2 space-x-1">
                <Clock className="h-3 w-3 text-gray-400" />
                <p className="text-xs text-gray-500">{item.date || 'Pending'}</p>
            </div>
        </div>
    </div>
);

const FaqItem = ({ question, answer }) => (
    <details className="group p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-800">
            <span>{question}</span>
            <span className="transition-transform duration-300 group-open:rotate-180 text-indigo-500">
                <ChevronDown className="h-5 w-5" />
            </span>
        </summary>
        <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-gray-600 leading-relaxed group-open:animate-fadeIn">
                {answer}
            </p>
        </div>
    </details>
);

const Modal = ({ type, title, message, onClose, isVisible }) => {
    if (!isVisible) return null;

    const successIcon = <CheckCircle className="h-12 w-12 text-green-600" />;
    const errorIcon = <AlertTriangle className="h-12 w-12 text-red-600" />;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center z-50 p-4">
            <div className="relative mx-auto border w-full max-w-md shadow-2xl rounded-2xl bg-white">
                <div className="p-8 text-center">
                    <div className={`mx-auto flex items-center justify-center h-16 w-16 rounded-full ${
                        type === 'success' ? 'bg-green-100' : 'bg-red-100'
                    } mb-4`}>
                        {type === 'success' ? successIcon : errorIcon}
                    </div>
                    <h3 className="text-xl leading-6 font-bold text-gray-900 mb-2">{title}</h3>
                    <div className="mb-6">
                        <p className="text-gray-600">{message}</p>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="w-full px-4 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Enhanced Page Components ---

const Header = ({ navigate }) => (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => navigate('/')}>
                    <img 
                        src="https://placehold.co/40x40/4f46e5/ffffff?text=IR" 
                        alt="IRCTC Logo" 
                        className="h-10 w-10 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300" 
                    />
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Grievance Portal</h1>
                        <p className="text-xs text-gray-500 hidden sm:block">Indian Railways</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <button 
                        onClick={() => navigate('/')} 
                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                        <Home className="h-4 w-4 inline mr-2" />
                        <span className="hidden sm:inline">Home</span>
                    </button>
                    <button 
                        onClick={() => navigate('/lookup')} 
                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                        <Search className="h-4 w-4 inline mr-2" />
                        <span className="hidden sm:inline">My Complaints</span>
                    </button>
                    <button 
                        onClick={() => navigate('/faq')} 
                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                        <MessageCircle className="h-4 w-4 inline mr-2" />
                        <span className="hidden sm:inline">FAQ</span>
                    </button>
                </div>
            </div>
        </nav>
    </header>
);

const HomePage = ({ navigate }) => (
    <div className="space-y-12">
        <section className="text-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                    <div className="p-3 bg-indigo-100 rounded-xl">
                        <Train className="h-10 w-10 text-indigo-600" />
                    </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Your Voice, <span className="text-indigo-600">Heard.</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Transparent, efficient, and reliable complaint resolution for your journey with Indian Railways.
                </p>
                <div className="flex flex-col lg:flex-row justify-center gap-4 max-w-4xl mx-auto">
                    <button 
                        onClick={() => navigate('/submit')} 
                        className="flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        <FileText size={20} />
                        <span>File Complaint</span>
                    </button>
                    <button 
                        onClick={() => navigate('/track')} 
                        className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-xl hover:bg-gray-200 transition-all duration-300"
                    >
                        <Search size={20} />
                        <span>Track Complaint</span>
                    </button>
                    <button 
        onClick={() => navigate('/lookup')} 
        className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-xl hover:bg-gray-200 transition-all duration-300"
    >
        <Eye size={20} />
        <span>My Complaints</span>
    </button>
                </div>
            </div>
        </section>

        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">How It Works</h3>
                <p className="text-gray-600">Simple steps to resolve your concerns</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                <HowItWorksCard 
                    icon={<FileText size={28} />} 
                    step="1" 
                    title="Submit" 
                    description="Use our guided form to file your grievance accurately with all necessary details." 
                />
                <HowItWorksCard 
                    icon={<Search size={28} />} 
                    step="2" 
                    title="Track" 
                    description="Watch your complaint's progress on a transparent timeline. No more black boxes." 
                />
                <HowItWorksCard 
                    icon={<CheckCircle size={28} />} 
                    step="3" 
                    title="Resolve" 
                    description="Receive clear updates, communicate with support, and get actionable resolutions." 
                />
            </div>
        </section>
        
        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">System Performance</h3>
                <p className="text-gray-600">Real-time insights into our service</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={<Shield size={24} />} label="System Status" value="Operational" color="green" />
                <StatCard icon={<Clock size={24} />} label="Avg. Resolution" value="18 Hours" color="blue" />
                <StatCard icon={<Award size={24} />} label="Resolved This Week" value="2,154" color="purple" />
                <StatCard icon={<Heart size={24} />} label="Satisfaction Rate" value="94.2%" color="orange" trend="+3.1%" />
            </div>
        </section>

        <section className="bg-indigo-600 p-8 md:p-12 rounded-2xl shadow-sm text-white">
            <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                    Our 24/7 support team is always ready to help with urgent matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                        <Phone className="h-5 w-5" />
                        <span>Emergency: 139</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                        <Globe className="h-5 w-5" />
                        <span>24/7 Online Support</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

const ComplaintLookupPage = ({ onLookup }) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email || phone) {
            onLookup(email, phone);
        } else {
            alert('Please provide either email or phone number.');
        }
    };

    return (
        <div className="max-w-lg mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-indigo-100 rounded-xl">
                            <FileText className="h-8 w-8 text-indigo-600" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">My Complaints</h2>
                    <p className="text-gray-600">Enter your details to view all your complaints</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email-lookup" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input 
                                type="email" 
                                id="email-lookup" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                                placeholder="your.email@example.com" 
                            />
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">OR</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="phone-lookup" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input 
                                type="tel" 
                                id="phone-lookup" 
                                value={phone} 
                                onChange={e => setPhone(e.target.value)} 
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                                placeholder="+91 9876543210" 
                            />
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <Search size={20} />
                        <span>View My Complaints</span>
                    </button>
                </form>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-2 text-sm">Privacy Note</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        Your information is secure and will only be used to retrieve your complaint history. 
                        We follow strict data protection protocols.
                    </p>
                </div>
            </div>
        </div>
    );
};

const ComplaintFormPage = ({ onComplaintSubmit }) => {
    const [step, setStep] = useState(1);
    const [pnr, setPnr] = useState('');
    const [pnrDetails, setPnrDetails] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [noPnr, setNoPnr] = useState(false);
    const [detectedCategory, setDetectedCategory] = useState(null);
const [hasAnalyzedText, setHasAnalyzedText] = useState(false);

    const [formData, setFormData] = useState({
        category: '',
        title: '',
        description: '',
        files: [],
        isUrgent: false,
        email: '',
        phone: ''
    });

    const handleNext = () => {
        if (step === 1 && !pnr && !noPnr) {
            alert('Please enter a PNR or check the box.');
            return;
        }
        if (step === 2 && (!formData.category || !formData.title || !formData.description)) {
            alert('Please fill all required fields.');
            return;
        }
        if (step === 3 && (!formData.email || !formData.phone)) {
            alert('Please provide your contact information.');
            return;
        }
        if (step < 4) setStep(step + 1);
    };
    // Add this function to handle text analysis
// Update the text analysis handler
const handleTextAnalysis = (text, analyzed = false) => {
    setHasAnalyzedText(analyzed); // ✅ This should now work correctly
    const categoryData = analyzeComplaintText(text);
    setDetectedCategory(categoryData);
    
    // Auto-set category in form data
    if (categoryData) {
        setFormData(prev => ({
            ...prev,
            category: categoryData.category,
            assignedTo: categoryData.department,
            subcategory: categoryData.subcategory,
            priority: categoryData.priority
        }));
    } else {
        setFormData(prev => ({
            ...prev,
            category: 'To be assigned',
            assignedTo: 'General Grievance Cell',
            subcategory: '',
            priority: 'medium'
        }));
    }
};




    
    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handlePnrFetch = () => {
        if (!pnr || pnr.length !== 10) {
            alert('Please enter a valid 10-digit PNR.');
            return;
        }
        setIsFetching(true);
        setTimeout(() => {
            setPnrDetails({
                trainName: '12002 - SHATABDI EXP',
                journeyDate: '2025-07-15',
                route: 'NDLS (New Delhi) to BPL (Bhopal)',
                class: 'CC (AC Chair Car)'
            });
            setIsFetching(false);
        }, 1000);
    };

    const handleFormChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData(prev => ({...prev, [id]: type === 'checkbox' ? checked : value }));
    }

    const handleSubmit = () => {
        const fullComplaint = { ...formData, pnr: noPnr ? 'N/A' : pnr };
        onComplaintSubmit(fullComplaint);
    }
    
    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">File a New Grievance</h2>
                    <p className="text-gray-600">Follow the steps to submit your complaint</p>
                </div>
                
                <div className="w-full flex items-center mb-8">
                    {[1, 2, 3, 4].map((s, index) => (
                        <React.Fragment key={s}>
                            <div className="flex flex-col items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                                    step >= s ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
                                }`}>
                                    {step > s ? <CheckCircle className="h-5 w-5" /> : s}
                                </div>
                                <p className={`mt-2 text-xs font-medium ${step >= s ? 'text-indigo-600' : 'text-gray-500'}`}>
                                    {s === 1 ? 'Journey' : s === 2 ? 'Details' : s === 3 ? 'Contact' : 'Review'}
                                </p>
                            </div>
                            {s < 4 && (
                                <div className={`flex-auto h-1 mx-2 rounded-full transition-all duration-300 ${
                                    step > s ? 'bg-indigo-600' : 'bg-gray-200'
                                }`}></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {step === 1 && (
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-gray-800">Step 1: Journey Details</h3>
                        <div>
                            <label htmlFor="pnr" className="block text-sm font-medium text-gray-700 mb-2">PNR Number</label>
                            <div className="flex gap-3">
                                <input 
                                    type="text" 
                                    id="pnr" 
                                    value={pnr} 
                                    onChange={e => setPnr(e.target.value)} 
                                    disabled={noPnr} 
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100" 
                                    placeholder="Enter your 10-digit PNR" 
                                />
                                <button 
                                    onClick={handlePnrFetch} 
                                    disabled={noPnr || isFetching} 
                                    className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 disabled:opacity-50 transition-colors"
                                >
                                    {isFetching ? 'Fetching...' : 'Fetch'}
                                </button>
                            </div>
                        </div>
                        
                        {pnrDetails && !noPnr && (
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                <div className="flex items-center space-x-2 mb-2">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <h4 className="font-bold text-green-800">Journey Details Found</h4>
                                </div>
                                <div className="space-y-1 text-sm">
                                    <p><strong>Train:</strong> {pnrDetails.trainName}</p>
                                    <p><strong>Date:</strong> {pnrDetails.journeyDate}</p>
                                    <p><strong>Route:</strong> {pnrDetails.route}</p>
                                    <p><strong>Class:</strong> {pnrDetails.class}</p>
                                </div>
                            </div>
                        )}
                        
                        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                            <input 
                                type="checkbox" 
                                id="noPnr" 
                                checked={noPnr} 
                                onChange={e => setNoPnr(e.target.checked)} 
                                className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <div>
                                <label htmlFor="noPnr" className="font-medium text-gray-700 cursor-pointer">
                                    My complaint is not related to a specific journey
                                </label>
                                <p className="text-sm text-gray-500 mt-1">
                                    Select this for general service issues, website problems, etc.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
    <div className="space-y-6">
        <h3 className="text-lg font-bold text-gray-800">Step 2: Describe Your Issue</h3>
        
        
        
        <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Complaint Title
                <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
                type="text" 
                id="title" 
                value={formData.title} 
                onChange={handleFormChange} 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                placeholder="Brief summary of the issue" 
                required
            />
        </div>
        
        <SmartDescriptionTextarea 
            formData={formData}
            handleFormChange={handleFormChange}
            onTextAnalysis={handleTextAnalysis}
        />
        <AutoCategoryDisplay 
            detectedCategory={detectedCategory}
            hasAnalyzedText={hasAnalyzedText}
        />
        
        {/* Rest of step 2 content remains the same */}
        <div>
            <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-2">Attach Evidence</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <input 
                    type="file" 
                    id="files" 
                    multiple 
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100" 
                />
                <p className="text-gray-500 text-sm mt-1">Upload images, documents, or screenshots</p>
            </div>
        </div>
        
        <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border border-red-200">
            <input 
                type="checkbox" 
                id="isUrgent" 
                checked={formData.isUrgent} 
                onChange={handleFormChange} 
                className="mt-1 h-4 w-4 text-red-600 border-red-300 rounded focus:ring-red-500" 
            />
            <div>
                <label htmlFor="isUrgent" className="font-medium text-red-700 flex items-center gap-2 cursor-pointer">
                    <AlertTriangle size={16} />
                    Mark as Urgent
                </label>
                <p className="text-sm text-red-600 mt-1">
                    Only for safety concerns or emergency situations
                </p>
            </div>
        </div>
    </div>
)}

                {step === 3 && (
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-gray-800">Step 3: Contact Information</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input 
                                        type="email" 
                                        id="email" 
                                        value={formData.email} 
                                        onChange={handleFormChange} 
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                                        placeholder="your.email@example.com" 
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        value={formData.phone} 
                                        onChange={handleFormChange} 
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                                        placeholder="+91 9876543210" 
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="flex items-start space-x-2">
                                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                                <div>
                                    <h4 className="font-medium text-blue-800">Privacy Notice</h4>
                                    <p className="text-sm text-blue-700 mt-1">
                                        Your contact information will be used only for complaint updates and resolution. 
                                        We maintain strict privacy standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-gray-800">Step 4: Review & Submit</h3>
                        <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="font-medium text-gray-500">PNR:</span>
                                    <p className="font-bold text-gray-800">{noPnr ? 'N/A' : pnr}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-500">Category:</span>
                                    <p className="font-bold text-gray-800">{formData.category}</p>
                                </div>
                                <div className="col-span-2">
                                    <span className="font-medium text-gray-500">Title:</span>
                                    <p className="font-bold text-gray-800">{formData.title}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-500">Email:</span>
                                    <p className="font-bold text-gray-800">{formData.email}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-500">Phone:</span>
                                    <p className="font-bold text-gray-800">{formData.phone}</p>
                                </div>
                            </div>
                            <div>
                                <span className="font-medium text-gray-500 text-sm">Description:</span>
                                <p className="text-gray-700 mt-1 text-sm leading-relaxed">{formData.description}</p>
                            </div>
                            {formData.isUrgent && (
                                <div className="flex items-center space-x-2 text-red-700 bg-red-100 px-3 py-2 rounded-lg">
                                    <AlertTriangle size={16} />
                                    <span className="font-bold text-sm">MARKED AS URGENT</span>
                                </div>
                            )}
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <p className="text-xs text-blue-700 leading-relaxed">
                                By submitting this complaint, you agree to our terms of service and acknowledge 
                                that all information provided is accurate to the best of your knowledge.
                            </p>
                        </div>
                    </div>
                )}

                <div className="mt-8 flex justify-between items-center">
                    <button 
                        onClick={handleBack} 
                        disabled={step === 1} 
                        className="flex items-center space-x-2 px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back</span>
                    </button>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>Step {step} of 4</span>
                    </div>
                    
                    {step < 4 ? (
                        <button 
                            onClick={handleNext} 
                            className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            <span>Next</span>
                            <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                        </button>
                    ) : (
                        <button 
                            onClick={handleSubmit} 
                            className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
                        >
                            <CheckCircle className="h-4 w-4" />
                            <span>Submit Complaint</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const TrackComplaintPage = ({ onTrack }) => {
    const [complaintId, setComplaintId] = useState('');
    const [identifier, setIdentifier] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (complaintId && identifier) {
            onTrack(complaintId, identifier);
        } else {
            alert('Please fill both fields.');
        }
    }

    return (
        <div className="max-w-lg mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-blue-100 rounded-xl">
                            <Search className="h-8 w-8 text-blue-600" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Track Your Complaint</h2>
                    <p className="text-gray-600">Enter your details to get real-time status updates</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="complaint-id-track" className="block text-sm font-medium text-gray-700 mb-2">
                            Complaint ID
                        </label>
                        <input 
                            type="text" 
                            id="complaint-id-track" 
                            value={complaintId} 
                            onChange={e => setComplaintId(e.target.value)} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            placeholder="e.g., CMP2025000123" 
                            required 
                        />
                        <p className="text-sm text-gray-500 mt-1">
                            This was provided when you submitted your complaint
                        </p>
                    </div>
                    
                    <div>
                        <label htmlFor="pnr-track" className="block text-sm font-medium text-gray-700 mb-2">
                            Registered PNR or Phone Number
                        </label>
                        <input 
                            type="text" 
                            id="pnr-track" 
                            value={identifier} 
                            onChange={e => setIdentifier(e.target.value)} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            placeholder="PNR or Mobile Number" 
                            required 
                        />
                        <p className="text-sm text-gray-500 mt-1">
                            For verification purposes
                        </p>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Search size={20} />
                        <span>Track Status</span>
                    </button>
                </form>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-2 text-sm">Quick Tips</h3>
                    <ul className="space-y-1 text-xs text-gray-600">
                        <li>• Your complaint ID was sent via email/SMS</li>
                        <li>• Use the same details from submission</li>
                        <li>• Status updates are available 24/7</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const DashboardPage = ({ complaints, onSelectComplaint, navigate, isVertical = true }) => (
    <div className="space-y-6">
        <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">My Complaints Dashboard</h2>
            <p className="text-gray-600">Monitor and manage all your submitted complaints</p>
        </div>
        
        {complaints.length > 0 ? (
            <div>
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
                            <Filter className="h-4 w-4 text-gray-500" />
                            <select className="border-0 focus:ring-0 text-sm bg-transparent">
                                <option>All Status</option>
                                <option>In Progress</option>
                                <option>Resolved</option>
                                <option>Submitted</option>
                            </select>
                        </div>
                        <div className="text-sm text-gray-500">
                            Total: <span className="font-bold text-indigo-600">{complaints.length}</span> complaints
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors rounded-lg hover:bg-gray-50">
                            <Download className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors rounded-lg hover:bg-gray-50">
                            <Share2 className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                
                <div className={isVertical ? "space-y-3" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
                    {complaints.map(c => <ComplaintCard key={c.id} complaint={c} onSelect={onSelectComplaint} isVertical={isVertical} />)}
                </div>
            </div>
        ) : (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="max-w-md mx-auto">
                    <div className="p-6 bg-gray-100 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        <FileText className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">No complaints found</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        You haven't submitted any complaints yet. Get started by filing a new complaint.
                    </p>
                    <button 
                        onClick={() => navigate('/submit')} 
                        className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm font-bold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors space-x-2"
                    >
                        <Plus className="h-5 w-5" />
                        <span>File Your First Complaint</span>
                    </button>
                </div>
            </div>
        )}
    </div>
);

const ComplaintDetailsPage = ({ complaint, onBack }) => {
    const [messages, setMessages] = useState(complaint?.communications || []);
    const [newMessage, setNewMessage] = useState('');
    if (!complaint) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Complaint Not Found</h2>
                <p className="text-gray-600 mb-6">The complaint details could not be loaded.</p>
                <button 
                    onClick={onBack} 
                    className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    Go Back
                </button>
            </div>
        );
    }



    const handleSendMessage = () => {
        if (!newMessage.trim()) return;
        
        const userMessage = {
            sender: 'You',
            message: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setNewMessage('');
        
        setTimeout(() => {
            const botReply = {
                sender: 'Support Agent',
                message: 'Thank you for your message. We have received it and will review it shortly. Our team is committed to resolving your concern.',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botReply]);
        }, 1500);
    };

    const statusStyles = {
        'In Progress': 'bg-orange-50 text-orange-700 border-orange-200',
        'Resolved': 'bg-green-50 text-green-700 border-green-200',
        'Submitted': 'bg-blue-50 text-blue-700 border-blue-200',
        'Escalated': 'bg-red-50 text-red-700 border-red-200',
    };

    return (
        <div className="min-h-screen space-y-6">
            <div className="flex items-center justify-between">
                <button 
                    onClick={onBack} 
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2 group"
                >
                    <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Dashboard</span>
                </button>
                
                <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors rounded-lg hover:bg-gray-50">
                        <Download className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors rounded-lg hover:bg-gray-50">
                        <Share2 className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-start flex-wrap gap-4">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{complaint.title}</h2>
                        <div className="flex items-center space-x-3">
                            <p className="text-gray-600">ID: {complaint.id}</p>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <p className="text-gray-600">Submitted {complaint.date}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className={`inline-flex items-center px-3 py-2 rounded-lg font-medium border ${statusStyles[complaint.status]}`}>
                            <Activity className="h-4 w-4 mr-2" />
                            {complaint.status}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                            Priority: <span className="font-medium text-orange-600">{complaint.priority || 'Medium'}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
    <h3 className="text-lg font-bold text-gray-800 mb-4">Complaint Details</h3>
    <div className="space-y-3">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-500 text-sm">Category</span>
            <span className="font-medium text-gray-800 text-right text-sm">{complaint.category}</span>
        </div>
        {complaint.subcategory && (
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-500 text-sm">Subcategory</span>
                <span className="font-medium text-gray-800 text-right text-sm">{complaint.subcategory}</span>
            </div>
        )}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-500 text-sm">Submitted</span>
            <span className="font-medium text-gray-800 text-right text-sm">{complaint.date}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-500 text-sm">PNR</span>
            <span className="font-medium text-gray-800 text-right text-sm">{complaint.pnr}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-500 text-sm">Priority</span>
            <span className={`font-medium text-right text-sm ${
                complaint.priority === 'critical' ? 'text-red-600' :
                complaint.priority === 'high' ? 'text-orange-600' :
                'text-blue-600'
            }`}>
                {complaint.priority?.toUpperCase() || 'MEDIUM'}
            </span>
        </div>
        <div className="flex justify-between items-center py-2">
            <span className="text-gray-500 text-sm">Assigned To</span>
            <span className="font-medium text-indigo-800 text-right text-sm">
                {complaint.assignedTo || 'General Grievance Cell'}
            </span>
        </div>
    </div>
</div>
                    
                    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Description</h3>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <p className="text-gray-700 text-sm leading-relaxed">{complaint.description}</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6">Progress Timeline</h3>
                        <div className="relative">
                            {/* ✅ Add safety check for history array */}
                            {complaint.history && complaint.history.length > 0 ? (
                                complaint.history.map((item, index) => (
                                    <TimelineItem 
                                        key={index} 
                                        item={item} 
                                        isLast={index === complaint.history.length - 1} 
                                    />
                                ))
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <p>No timeline data available</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-indigo-600" />
                    <span>Communication Hub</span>
                </h3>
                
                <div className="space-y-3 max-h-64 overflow-y-auto mb-6 pr-2">
                    {/* ✅ Add safety check for messages array */}
                    {messages && messages.length > 0 ? (
                        messages.map((comm, index) => (
                            <div key={index} className={`p-4 rounded-lg transition-all duration-300 ${
                                comm.sender === 'You' 
                                    ? 'bg-indigo-50 border-l-4 border-indigo-500 ml-6' 
                                    : 'bg-gray-50 border-l-4 border-gray-300 mr-6'
                            }`}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className={`font-medium text-sm ${
                                        comm.sender === 'You' ? 'text-indigo-800' : 'text-gray-800'
                                    }`}>
                                        {comm.sender}
                                    </span>
                                    <span className="text-xs text-gray-500">{comm.time}</span>
                                </div>
                                <p className="text-gray-700 text-sm">{comm.message}</p>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-500">
                            <p>No messages yet. Start a conversation!</p>
                        </div>
                    )}
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                    <div className="flex space-x-3">
                        <input
                            type="text"
                            placeholder="Type your message here..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <button 
                            onClick={handleSendMessage} 
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2 font-medium"
                        >
                            <Send className="h-4 w-4" />
                            <span>Send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FaqPage = () => {
    const faqData = [
        { 
            question: 'How do I file a complaint?', 
            answer: 'You can file a new complaint by clicking the "File Complaint" button on the homepage and following our simple 4-step wizard. You will need your PNR number if the issue is journey-related, plus your contact information.' 
        },
        { 
            question: 'How can I track the status of my complaint?', 
            answer: 'Click the "Track Complaint" button and enter your unique Complaint ID and the PNR/phone number you used during submission. You will then see a real-time timeline of your complaint\'s progress.' 
        },
        { 
            question: 'What do the different statuses mean?', 
            answer: 'Submitted: We have received your complaint. In Progress: The responsible department is actively investigating your issue. Awaiting Your Reply: We need more information from you. Resolved: A resolution has been offered or action has been taken.' 
        },
        { 
            question: 'Can I add more information after submitting a complaint?', 
            answer: 'Yes, on the complaint details page, you can use the Communication Hub to add comments or reply to agent queries. This helps us resolve your issue more effectively.' 
        },
        { 
            question: 'How can I view all my complaints?', 
            answer: 'Use the "My Complaints" section by entering your email or phone number. This will show you all complaints associated with your contact information in a convenient dashboard view.' 
        },
        { 
            question: 'Is my personal information secure?', 
            answer: 'Yes, we follow strict data protection protocols. Your information is encrypted and used only for complaint resolution purposes. We never share your data with third parties.' 
        }
    ];

    return (
        <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-indigo-100 rounded-xl">
                            <MessageCircle className="h-8 w-8 text-indigo-600" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Find quick answers to common questions</p>
                </div>
                
                <div className="space-y-4">
                    {faqData.map((faq, index) => <FaqItem key={index} question={faq.question} answer={faq.answer} />)}
                </div>
                
                <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-200">
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Still need help?</h3>
                        <p className="text-gray-600 mb-4 text-sm">Can't find what you're looking for? Our support team is here to assist you.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                                <Phone className="h-4 w-4" />
                                <span>Call Support</span>
                            </button>
                            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-white text-indigo-600 font-medium rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-colors">
                                <MessageCircle className="h-4 w-4" />
                                <span>Live Chat</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main App Component ---

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [complaints, setComplaints] = useState({
    'CMP2025060701': { 
        id: 'CMP2025060701', 
        pnr: '2456879541', 
        title: "Refund not processed for failed booking", 
        category: 'Refund', 
        subcategory: 'Payment Issues',
        date: '2025-06-07', 
        status: 'In Progress', 
        description: 'Payment was deducted from my account but the ticket was not booked.', 
        assignedTo: 'Finance - Refunds Team',
        priority: 'high',
        email: 'user@example.com',
        phone: '+91 9876543210',
        // ✅ New simplified 3-step timeline
        history: [
            { 
                date: 'June 9 at 5:50 PM', 
                action: 'Complaint Submitted', 
                details: 'Your complaint has been received and is awaiting assignment.', 
                completed: true 
            }, 
            { 
                date: 'June 9 at 5:50 PM', 
                action: 'Status of Complaint', 
                details: 'Assigned - Priority handling initiated', 
                completed: true 
            }, 
            { 
                date: 'June 10 at 11:30 AM', 
                action: 'Investigation & Resolution', 
                details: 'Status: Department will investigate and provide resolution.',
                remark: 'Finance team is reviewing the transaction details and coordinating with payment gateway for refund processing.',
                completed: false 
            }
        ],
        communications: [
            { sender: 'System', message: 'Your complaint has been registered successfully.', time: 'June 7, 10:15 AM' },
            { sender: 'Support Agent', message: 'We have received your refund request.', time: 'June 7, 10:17 AM' }
        ]
    },
    'CMP2025060802': { 
        id: 'CMP2025060802', 
        pnr: '8541236587', 
        title: "Poor food quality in Vande Bharat Express", 
        category: 'Catering', 
        subcategory: 'Food Quality',
        date: '2025-06-08', 
        status: 'Resolved', 
        description: 'The meal served was stale and cold.', 
        assignedTo: 'Catering Quality Team',
        priority: 'medium',
        email: 'user@example.com',
        phone: '+91 9876543210',
        // ✅ New simplified 3-step timeline
        history: [
            { 
                date: 'June 9 at 5:50 PM', 
                action: 'Complaint Submitted', 
                details: 'Your complaint has been received and is awaiting assignment.', 
                completed: true 
            }, 
            { 
                date: 'June 9 at 5:50 PM', 
                action: 'Status of Complaint', 
                details: 'Assigned - Standard processing queue', 
                completed: true 
            }, 
            { 
                date: 'June 9 at 8:30 PM', 
                action: 'Investigation & Resolution', 
                details: 'Status: Complaint has been resolved',
                remark: 'Quality audit conducted with vendor. Corrective measures implemented and partial refund processed to customer account.',
                completed: true 
            }
        ],
        communications: [
            { sender: 'System', message: 'Your complaint regarding food quality has been registered.', time: 'June 8, 01:20 PM' },
            { sender: 'Catering Manager', message: 'Investigation completed. Issue resolved.', time: 'June 9, 11:10 AM' }
        ]
    }
});

// ✅ Add this function before the App component
const generateComplaintStatus = (category, priority, timeElapsed) => {
    const statusOptions = {
        'Emergency': {
            'critical': [
                'Assigned - Emergency response team activated',
                'Under Review - Immediate action being taken',
                'Resolved - Emergency assistance provided'
            ],
            'high': [
                'Assigned - High priority handling',
                'Under Review - Urgent investigation in progress', 
                'Resolved - Issue addressed promptly'
            ]
        },
        'Refund': {
            'high': [
                'Assigned - Finance team reviewing',
                'Under Review - Payment verification in progress',
                'Resolved - Refund processed successfully'
            ],
            'medium': [
                'Assigned - Standard refund processing',
                'Under Review - Transaction being verified',
                'Resolved - Amount credited to account'
            ]
        },
        'Technical': {
            'medium': [
                'Assigned - IT support team notified',
                'Under Review - Technical investigation ongoing',
                'Resolved - System issue fixed'
            ]
        },
        'Catering': {
            'medium': [
                'Assigned - Catering quality team reviewing',
                'Under Review - Vendor audit in progress',
                'Resolved - Quality standards enforced'
            ]
        },
        'default': [
            'Assigned - Department team assigned',
            'Under Review - Investigation in progress',
            'Resolved - Issue resolved successfully'
        ]
    };
    
    const categoryStatuses = statusOptions[category] || statusOptions['default'];
    const priorityStatuses = categoryStatuses[priority] || statusOptions['default'];
    
    // Return status based on time elapsed (mock logic)
    if (timeElapsed < 1) return priorityStatuses[0]; // Assigned
    if (timeElapsed < 24) return priorityStatuses[1]; // Under Review  
    return priorityStatuses[2]; // Resolved
};


    const [notification, setNotification] = useState({ isVisible: false, type: '', title: '', message: '' });

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    const navigate = (path) => {
        window.history.pushState({}, '', path);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    const showNotification = (type, title, message) => {
        setNotification({ isVisible: true, type, title, message });
    };

   const handleComplaintSubmit = (formData) => {
    const id = `CMP2025${Math.floor(100000 + Math.random() * 900000)}`;
    
    // ✅ Generate dynamic status based on category priority
    const getInitialStatus = (priority) => {
        switch(priority) {
            case 'critical':
                return 'Assigned - Emergency response team activated';
            case 'high':
                return 'Assigned - Priority handling initiated';
            default:
                return 'Assigned - Standard processing queue';
        }
    };
    
    // ✅ Generate dynamic investigation status
    const getInvestigationStatus = (category, priority) => {
        if (priority === 'critical') {
            return 'Status: Emergency response in progress';
        }
        return 'Status: Department will investigate and provide resolution.';
    };
    
    // ✅ Generate dynamic remarks
    const getInvestigationRemark = (category) => {
        const remarks = {
            'Emergency': 'Emergency response team has been notified and immediate action is being taken to address the critical situation.',
            'Refund': 'Finance team is reviewing the transaction details and coordinating with payment gateway for refund processing.',
            'Technical': 'IT support team is analyzing the technical issue and working on implementing a solution.',
            'Catering': 'Catering quality team is investigating the food service concern and implementing quality improvements.',
            'Staff Behavior': 'HR team is reviewing the staff conduct issue and taking appropriate disciplinary action.',
            'default': 'Department team has been assigned and is actively working to resolve your concern.'
        };
        return remarks[category] || remarks['default'];
    };
    
    const currentTime = new Date().toLocaleString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    
    const newComplaint = {
        id,
        pnr: formData.pnr,
        title: formData.title,
        category: formData.category,
        subcategory: formData.subcategory || '',
        date: new Date().toISOString().split('T')[0],
        status: 'Submitted',
        description: formData.description,
        assignedTo: formData.assignedTo || 'General Grievance Cell',
        priority: formData.priority || 'medium',
        email: formData.email,
        phone: formData.phone,
        // ✅ New standardized 3-step timeline
        history: [
            {
                date: currentTime,
                action: 'Complaint Submitted',
                details: 'Your complaint has been received and is awaiting assignment.',
                completed: true
            },
            { 
                date: currentTime,
                action: 'Status of Complaint', 
                details: getInitialStatus(formData.priority || 'medium'), 
                completed: true 
            },
            {
                date: '',
                action: 'Investigation & Resolution',
                details: getInvestigationStatus(formData.category, formData.priority || 'medium'),
                remark: getInvestigationRemark(formData.category),
                completed: false
            }
        ],
        communications: [
            { 
                sender: 'System', 
                message: `Your complaint has been successfully registered with ID ${id}. You will receive regular updates.`, 
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
            }
        ]
    };
    
    console.log('Creating complaint with structure:', newComplaint);
    
    setComplaints(prev => ({ ...prev, [id]: newComplaint }));
    showNotification('success', 'Complaint Submitted Successfully!', `Your complaint has been registered with ID ${id}. You can track its progress anytime.`);
    navigate('/dashboard');
};


    const handleComplaintLookup = (email, phone) => {
        // Filter complaints by email or phone
        const userComplaints = Object.values(complaints).filter(c => 
            (email && c.email === email) || (phone && c.phone === phone)
        );
        
        if (userComplaints.length > 0) {
            navigate('/dashboard');
        } else {
            showNotification('error', 'No Complaints Found', 'No complaints were found for the provided email or phone number. Please check your details and try again.');
        }
    };

    const handleTrackComplaint = (id) => {
        if (complaints[id]) {
            navigate(`/dashboard/${id}`);
        } else {
            showNotification('error', 'Complaint Not Found', 'The complaint ID you entered was not found. Please check the ID and try again.');
        }
    };
    
    const renderPage = () => {
        if (currentPath.startsWith('/dashboard/')) {
            const id = currentPath.split('/dashboard/')[1];
            const complaint = complaints[id];
            return complaint ? (
                <ComplaintDetailsPage complaint={complaint} onBack={() => navigate('/dashboard')} />
            ) : (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">404 - Complaint Not Found</h2>
                    <p className="text-gray-600 mb-6">The complaint you're looking for doesn't exist or may have been removed.</p>
                    <button 
                        onClick={() => navigate('/dashboard')} 
                        className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        Go to Dashboard
                    </button>
                </div>
            );
        }

        switch (currentPath) {
            case '/':
            case '/home':
                return <HomePage navigate={navigate} />;
            case '/submit':
                return <ComplaintFormPage onComplaintSubmit={handleComplaintSubmit} />;
            case '/track':
                return <TrackComplaintPage onTrack={handleTrackComplaint} />;
            case '/lookup':
                return <ComplaintLookupPage onLookup={handleComplaintLookup} />;
            case '/dashboard':
                return <DashboardPage complaints={Object.values(complaints)} onSelectComplaint={handleTrackComplaint} navigate={navigate} isVertical={true} />;
            case '/faq':
                return <FaqPage />;
            default:
                return (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">404 - Page Not Found</h2>
                        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
                        <button 
                            onClick={() => navigate('/')} 
                            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Go to Home
                        </button>
                    </div>
                );
        }
    };

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen">
            <Header navigate={navigate} />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                {renderPage()}
            </main>
            <Modal {...notification} onClose={() => setNotification(prev => ({...prev, isVisible: false}))} />
        </div>
    );
};

export default App;
