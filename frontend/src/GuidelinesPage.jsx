import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
    ArrowLeft, 
    Download, 
    FileText, 
    Search 
} from 'lucide-react';

const GuidelinesPage = ({ onBack }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const markdownContent = `# Railway Complaint Classification System - Documentation & Guidelines

## Table of Contents
1. [Overview](#overview)
2. [Classification Architecture](#classification-architecture)
3. [Primary Classification Categories](#primary-classification-categories)
4. [Routing Rules & Logic](#routing-rules--logic)
5. [Priority Assignment System](#priority-assignment-system)
6. [Department Assignment](#department-assignment)
7. [Special Processing Rules](#special-processing-rules)
8. [Quality Assurance & Monitoring](#quality-assurance--monitoring)
9. [Configuration Parameters](#configuration-parameters)
10. [Troubleshooting Guide](#troubleshooting-guide)

---

## Overview

The Railway Complaint Classification System is an intelligent, rule-based engine that automatically categorizes, prioritizes, and routes customer complaints to appropriate departments. The system processes complaints from multiple sources including web portals, mobile apps, social media, and physical submissions.

### Key Features
- **Multi-layered Classification**: Content-based, PNR-data-based, and source-based routing
- **Dynamic Priority Assignment**: Critical, Urgent, High, Medium, and Low priority levels
- **Intelligent Department Routing**: 25+ specialized departments for targeted resolution
- **Real-time Processing**: Immediate classification and assignment upon submission
- **Escalation Management**: Automatic escalation based on severity and SLA breaches

---

## Classification Architecture

### Processing Flow

Complaint Input → Content Analysis → Category Detection → Priority Assignment → Department Routing → SLA Setting → Notification Dispatch


### Classification Layers

#### 1. **Content-Based Classification**
- **Keyword Analysis**: Matches complaint text against predefined keyword dictionaries
- **Sentiment Analysis**: Evaluates emotional tone and urgency indicators
- **Language Processing**: Handles multiple languages and regional variations
- **Context Understanding**: Considers complaint history and user patterns

#### 2. **PNR-Data-Based Classification**
- **Train Type Analysis**: Different handling for premium vs. regular services
- **Journey Timing**: Immediate vs. post-journey complaint processing
- **Route Classification**: Zone-specific and high-traffic route considerations
- **Class-Based Routing**: Service level expectations based on travel class

#### 3. **Source-Based Classification**
- **Channel Identification**: Web portal, mobile app, social media, email, phone
- **User Authentication**: Guest vs. registered vs. premium user handling
- **Submission Context**: Emergency section vs. feedback section routing

---

## Primary Classification Categories

### 1. Emergency (Priority: Critical)
**Triggers Immediate Response**

**Subcategories:**
- **Critical Emergencies**: Medical emergencies, fire, accidents, bomb threats, missing children
- **Natural Disasters**: Floods, earthquakes, cyclones, bridge collapses
- **Safety Threats**: Train derailments, signal failures, track obstructions

**Keywords Detected:**
- Medical: medical emergency, heart attack, unconscious, bleeding, ambulance
- Fire/Explosion: fire in train, smoke, electrical fire, gas leak, explosion
- Missing Persons: child missing, kidnapping, lost child
- Infrastructure: train derailment, signal failure, track obstruction, collision

**Department Assignment:** Emergency Response Team, Operations Emergency Team  
**SLA:** Immediate response (< 15 minutes)

### 2. Safety & Security (Priority: Urgent)
**Requires Swift Action**

**Subcategories:**
- **Security Threats**: Theft, robbery, suspicious activities, weapons
- **Women Safety**: Harassment, inappropriate behavior, safety concerns
- **General Safety**: Safety equipment issues, security gaps
- **Child Safety**: Unaccompanied minors, child protection issues

**Keywords Detected:**
- Security: theft, robbery, suspicious person, weapon, violence
- Women Safety: harassment, eve teasing, inappropriate touching, ladies compartment
- Child Safety: unaccompanied child, child abuse, missing child

**Department Assignment:** RPF Security Team, Women Safety Cell, Account Security Team  
**SLA:** 1-2 hours

### 3. Refund & Financial (Priority: High)
**Money-Related Issues**

**Subcategories:**
- **Refund Issues**: Pending refunds, incorrect refund amounts, TDR processing
- **Payment Issues**: Failed transactions, double charges, payment gateway errors
- **Erroneous Charges**: Wrong deductions, overcharging, billing errors
- **Financial Disputes**: Chargebacks, transaction disputes

**Keywords Detected:**
- Refunds: refund not credited, TDR, refund delayed, cancellation refund
- Payment: double charge, payment failed, amount deducted, transaction failed
- Disputes: wrong deduction, overcharged, unauthorized deduction

**Department Assignment:** Finance Refund Team, Finance Dispute Team, Payment Gateway Support  
**SLA:** 24-48 hours

### 4. Ticketing & Booking (Priority: Medium-High)
**Reservation and Booking Issues**

**Subcategories:**
- **Booking Failures**: Failed bookings, session timeouts, booking errors
- **Reservation Issues**: Waitlist problems, seat allocation, confirmation issues
- **Tatkal Booking**: Special quota booking problems
- **Ticket Issues**: E-ticket problems, printing issues, cancellation problems

**Keywords Detected:**
- Booking: booking failed, unable to book, booking timeout, session expired
- Reservation: waitlist, seat not available, confirmation issue, chart preparation
- Tatkal: tatkal booking, tatkal failed, premium tatkal, emergency quota

**Department Assignment:** Booking Support Team, Tatkal Support Team, Urgent Ticketing Support  
**SLA:** 4-24 hours (varies by urgency)

### 5. Catering & Food (Priority: Medium)
**Food Service Related Complaints**

**Subcategories:**
- **Food Quality**: Spoiled food, food poisoning, contamination, foreign objects
- **Food Service**: Delayed service, unavailable items, cold food
- **Pricing Issues**: Overpriced food, billing errors
- **Dietary Requirements**: Special diet needs, vegetarian/non-vegetarian issues

**Keywords Detected:**
- Quality: bad food, spoiled food, food poisoning, hair in food, expired food
- Service: no food provided, food delayed, cold food, menu not available
- Pricing: overpriced food, expensive meal, overcharged food

**Department Assignment:** Catering Quality Team, Premium Catering Team, IRCTC E-Catering Team  
**SLA:** 24-48 hours

### 6. Technical Issues (Priority: Medium)
**Technology and System Problems**

**Subcategories:**
- **Website/Portal Issues**: Server errors, website crashes, loading problems
- **App Issues**: Mobile app crashes, functionality problems
- **Login/Authentication**: Password issues, OTP problems, account access
- **Payment Gateway**: Transaction processing errors
- **Browser/Compatibility**: Browser-specific issues, compatibility problems

**Keywords Detected:**
- Website: website error, server down, portal not loading, HTTP error
- App: app crash, app not working, mobile app error
- Login: login failed, password reset, OTP not received, account locked
- Payment: payment gateway error, transaction timeout, payment declined

**Department Assignment:** IT Support Level 1, Web Portal Backend Support, Payment Gateway Support  
**SLA:** 24-72 hours

### 7. Staff Behavior (Priority: High for Misconduct)
**Employee Conduct Issues**

**Subcategories:**
- **Misconduct**: Rude behavior, inappropriate conduct, corruption
- **Positive Behavior**: Staff appreciation, excellent service recognition
- **Service Issues**: Poor service quality, service denial
- **Communication Issues**: Language barriers, unresponsive staff
- **Harassment**: Various forms of harassment and discrimination

**Keywords Detected:**
- Misconduct: TTE misbehaved, staff rude, inappropriate behavior, corruption
- Positive: helpful staff, excellent service, courteous behavior
- Harassment: verbal abuse, discrimination, sexual harassment

**Department Assignment:** HR Disciplinary Team, HR Recognition Team, Employee Grievance Cell  
**SLA:** 48-72 hours

### 8. Cleanliness & Maintenance (Priority: Medium)
**Infrastructure and Hygiene Issues**

**Subcategories:**
- **Cleanliness Issues**: Dirty coaches, unclean toilets, poor hygiene
- **Electrical Issues**: AC/fan problems, power issues, lighting problems
- **Water Issues**: Water shortage, quality problems, leakage
- **Structural Issues**: Broken fixtures, damaged equipment

**Keywords Detected:**
- Cleanliness: dirty coach, unclean toilet, poor hygiene, garbage, smell
- Electrical: AC not working, fan not working, no power, light not working
- Water: water shortage, dirty water, water leakage, no water

**Department Assignment:** Coaching Maintenance Team, Electrical Team, AC Maintenance Team  
**SLA:** 72 hours - 1 week

### 9. Train Operations (Priority: Medium)
**Operational Service Issues**

**Subcategories:**
- **Delays**: Train delays, schedule issues, timing problems
- **Cancellations**: Service cancellations, trip cancellations
- **Station Issues**: Platform problems, announcements, facilities
- **Operational Issues**: Overcrowding, capacity problems

**Keywords Detected:**
- Delays: train delay, running late, late arrival, schedule
- Cancellations: train cancelled, service cancelled, trip cancelled
- Overcrowding: overcrowding, standing passengers, no seats

**Department Assignment:** Operations Analytics Team, System Monitoring Team  
**SLA:** 24-48 hours

### 10. Accessibility (Priority: High)
**Special Needs and Accessibility Issues**

**Subcategories:**
- **Disability Services**: Wheelchair access, disabled facilities, mobility aids
- **Visual/Hearing Impairment**: Braille services, audio assistance, sign language
- **Elderly Services**: Senior citizen facilities, special assistance
- **Medical Conditions**: Health-related accommodations

**Keywords Detected:**
- Disability: wheelchair access, disabled facilities, accessibility, ramp
- Visual: blind, visually impaired, braille, screen reader
- Elderly: senior citizen, elderly, old age

**Department Assignment:** Accessibility Support Team, Accessibility Digital Team, Senior Citizen Support Team  
**SLA:** 24-48 hours

---

## Routing Rules & Logic

### Content-Based Routing Rules

#### Keyword Matching Algorithm

IF complaint_text CONTAINS keywords FROM category
THEN CALCULATE confidence_score
IF confidence_score > THRESHOLD
THEN CATEGORIZE_AS category\`


#### Multi-Category Handling
- **Primary Category**: Highest confidence score
- **Secondary Categories**: Additional relevant categories
- **Cross-Category Issues**: Complaints spanning multiple categories

#### Sentiment Analysis Integration

IF sentiment_score < -0.7 AND source IS "Social_Media"
THEN ESCALATE priority AND ASSIGN_TO "Crisis_Team"


### PNR-Data-Based Routing

#### Train Type Classification

Premium Trains (Rajdhani, Shatabdi, Vande Bharat):
- Higher priority for service complaints
- Specialized premium support teams
- Reduced SLA timelines

Regular Trains:
- Standard priority assignment
- General support teams
- Standard SLA timelines


## Need Help?

If you have questions about these guidelines or need assistance with filing a complaint, please contact our support team:

- **Emergency Helpline**: 139
- **General Support**: 1800-111-139
- **Email**: support@indianrailways.gov.in
- **Live Chat**: Available 24/7 on our portal

---

*Last updated: June 2025*`;

    // Custom components for better styling
    const components = {
        h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-200">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8 pb-2 border-b border-gray-200">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
                {children}
            </h4>
        ),
        p: ({ children }) => (
            <p className="text-gray-700 mb-4 leading-relaxed">
                {children}
            </p>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 ml-4">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 ml-4">
                {children}
            </ol>
        ),
        li: ({ children }) => (
            <li className="mb-1">
                {children}
            </li>
        ),
        code: ({ inline, children }) => {
            if (inline) {
                return (
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                        {children}
                    </code>
                );
            }
            return (
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
                    <code className="text-sm font-mono">
                        {children}
                    </code>
                </pre>
            );
        },
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 mb-4 bg-indigo-50 italic text-gray-700">
                {children}
            </blockquote>
        ),
        strong: ({ children }) => (
            <strong className="font-bold text-gray-900">
                {children}
            </strong>
        ),
        em: ({ children }) => (
            <em className="italic text-gray-800">
                {children}
            </em>
        ),
        hr: () => (
            <hr className="border-gray-300 my-8" />
        ),
        table: ({ children }) => (
            <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    {children}
                </table>
            </div>
        ),
        th: ({ children }) => (
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {children}
            </th>
        ),
        td: ({ children }) => (
            <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                {children}
            </td>
        )
    };

    return (
        <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <button 
                        onClick={onBack} 
                        className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2 group"
                    >
                        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </button>
                    
                    <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors">
                            <Download className="h-4 w-4" />
                            <span>Download PDF</span>
                        </button>
                    </div>
                </div>

                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-indigo-100 rounded-xl">
                            <FileText className="h-8 w-8 text-indigo-600" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Railway Complaint Guidelines
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Comprehensive guide for filing and managing complaints effectively
                    </p>

                    <div className="max-w-md mx-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search guidelines..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-8">
                    <div className="prose prose-lg max-w-none">
                        <ReactMarkdown 
                            components={components}
                            remarkPlugins={[remarkGfm]}
                        >
                            {markdownContent}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>

            {/* Quick Navigation */}
            <div className="mt-6 bg-indigo-50 rounded-2xl border border-indigo-200 p-6">
                <h3 className="text-lg font-bold text-indigo-900 mb-4">Quick Navigation</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <button className="text-left p-3 bg-white rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-colors">
                        <div className="font-medium text-indigo-800">Classification System</div>
                        <div className="text-sm text-indigo-600">How complaints are categorized</div>
                    </button>
                    <button className="text-left p-3 bg-white rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-colors">
                        <div className="font-medium text-indigo-800">Priority Levels</div>
                        <div className="text-sm text-indigo-600">Understanding urgency levels</div>
                    </button>
                    <button className="text-left p-3 bg-white rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-colors">
                        <div className="font-medium text-indigo-800">Department Routing</div>
                        <div className="text-sm text-indigo-600">How complaints are assigned</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GuidelinesPage;
