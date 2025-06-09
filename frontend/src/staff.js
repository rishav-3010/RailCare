import React, { useState, useMemo, useCallback } from 'react';
import {
    ArrowLeft,
    Users,
    Shield,
    Eye,
    Filter,
    Search,
    Download,
    RefreshCw,
    AlertCircle,
    CheckCircle,
    Clock,
    XCircle,
    Loader,
    ChevronUp,
    ChevronDown,
    FileText
} from 'lucide-react';

// A mapping of priorities to numerical values for sorting
const priorityOrder = {
    critical: 5,
    urgent: 4,
    high: 3,
    medium: 2,
    low: 1,
};

// Reusable hook for sorting table data
const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];

                // Handle priority sorting based on the defined order
                if (sortConfig.key === 'priority') {
                    aValue = priorityOrder[aValue.toLowerCase()] || 0;
                    bValue = priorityOrder[bValue.toLowerCase()] || 0;
                }
                
                // Handle date sorting
                if (sortConfig.key === 'submittedAt') {
                    aValue = new Date(aValue).getTime();
                    bValue = new Date(bValue).getTime();
                }

                if (aValue < bValue) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};


// NEW: Skeleton loader component for a table row
const SkeletonRow = () => (
    <tr className="animate-pulse">
        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-48"></div></td>
        <td className="px-6 py-4"><div className="h-6 bg-gray-200 rounded-full w-20"></div></td>
        <td className="px-6 py-4"><div className="h-6 bg-gray-200 rounded-full w-28"></div></td>
        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-32"></div></td>
        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-40"></div></td>
        <td className="px-6 py-4"><div className="h-6 bg-gray-200 rounded w-16"></div></td>
    </tr>
);

// NEW: Refactored Complaints Table into its own component
const ComplaintTable = ({ complaints, onSort, sortConfig, navigate }) => {
    
    const getSortIcon = (key) => {
        if (!sortConfig || sortConfig.key !== key) {
            return <ChevronDown className="h-3 w-3 text-gray-400" />;
        }
        return sortConfig.direction === 'ascending' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />;
    };

    const getStatusIcon = (status) => {
        switch (status.toLowerCase()) {
            case 'resolved': return <CheckCircle className="h-4 w-4 text-green-600" />;
            case 'in progress': return <Clock className="h-4 w-4 text-yellow-600" />;
            case 'pending': return <AlertCircle className="h-4 w-4 text-orange-600" />;
            case 'closed': return <XCircle className="h-4 w-4 text-red-600" />;
            default: return <Clock className="h-4 w-4 text-gray-600" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'resolved': return 'bg-green-100 text-green-800';
            case 'in progress': return 'bg-yellow-100 text-yellow-800';
            case 'pending': return 'bg-orange-100 text-orange-800';
            case 'closed': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority.toLowerCase()) {
            case 'critical': return 'bg-red-100 text-red-800 border-red-200';
            case 'urgent': return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'high': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'medium': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'low': return 'bg-gray-100 text-gray-800 border-gray-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const tableHeaders = [
        { key: 'id', label: 'Complaint ID' },
        { key: 'subject', label: 'Subject' },
        { key: 'priority', label: 'Priority' },
        { key: 'status', label: 'Status' },
        { key: 'submittedAt', label: 'Submitted Date' },
        { key: 'email', label: 'Contact' }
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {tableHeaders.map(header => (
                            <th 
                                key={header.key}
                                onClick={() => onSort(header.key)}
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer group"
                            >
                                <div className="flex items-center space-x-1">
                                    <span>{header.label}</span>
                                    {getSortIcon(header.key)}
                                </div>
                            </th>
                        ))}
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {complaints.map((complaint) => (
                        <tr key={complaint.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{complaint.id}</td>
                            <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate" title={complaint.subject}>{complaint.subject}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(complaint.priority)}`}>
                                    {complaint.priority}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center space-x-2">
                                    {getStatusIcon(complaint.status)}
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                                        {complaint.status}
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(complaint.submittedAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                    onClick={() => navigate(`/dashboard/${complaint.id}`)}
                                    className="text-orange-600 hover:text-orange-900 flex items-center space-x-1"
                                >
                                    <Eye className="h-4 w-4" />
                                    <span>View</span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


// NEW: Refactored Dashboard into its own component
const StaffDashboard = ({ onBack, complaintsData, navigate, onLogout }) => {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedSubDepartment, setSelectedSubDepartment] = useState('');
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [isLoading, setIsLoading] = useState(false);
    
    // Department and Subdepartment mapping
    const departmentStructure = {
        'Emergency': ['Emergency Response Team', 'Operations Emergency Team'],
        'Safety & Security': ['RPF Security Team', 'Women Safety Cell', 'Account Security Team'],
        'Refund & Financial': ['Finance Refund Team', 'Payment Gateway Support', 'Finance Dispute Team'],
        'Ticketing & Booking': ['Booking Support Team', 'Tatkal Support Team', 'Urgent Ticketing Support'],
        'Catering & Food': ['Catering Quality Team', 'Premium Catering Team', 'IRCTC E-Catering Team'],
        'Technical Issues': ['Web Portal Backend Support', 'IT Support Level 1', 'Payment Gateway Support'],
        'Staff Behavior': ['HR Disciplinary Team', 'Employee Grievance Cell', 'HR Recognition Team'],
        'Cleanliness & Maintenance': ['Coaching Maintenance Team', 'Electrical Team', 'AC Maintenance Team'],
        'Train Operations': ['Operations Analytics Team', 'System Monitoring Team', 'High Density Route Support'],
        'Accessibility': ['Accessibility Support Team', 'Accessibility Digital Team', 'Senior Citizen Support Team'],
        'Station Amenities': ['NR Station Management', 'SR Station Management', 'Commercial Station Section'],
        'Premium Services': ['Premium User Support', 'Premium Catering Team', 'Premium Maintenance Team'],
        'Social Media & PR': ['Social Media Crisis Team', 'Public Relations Crisis Team', 'Content Moderation Team'],
        'Default Assignment': ['General Grievance Cell']
    };

    const handleDepartmentChange = (department) => {
        setSelectedDepartment(department);
        setSelectedSubDepartment('');
        setFilteredComplaints([]);
    };

    const handleSubDepartmentChange = (subDepartment) => {
        setSelectedSubDepartment(subDepartment);
        // ENHANCED: Simulate async data fetching
        setIsLoading(true);
        setTimeout(() => { // Simulate network delay
            if (!subDepartment || !complaintsData) {
                setFilteredComplaints([]);
            } else {
                 const filtered = Object.values(complaintsData).filter(complaint => 
                    complaint.assignedDepartment === subDepartment
                );
                setFilteredComplaints(filtered);
            }
            setIsLoading(false);
        }, 800);
    };

    const resetFilters = () => {
        setSearchTerm('');
        setStatusFilter('all');
        if (selectedSubDepartment) {
            handleSubDepartmentChange(selectedSubDepartment);
        }
    };

    // ENHANCED: Memoize filtering and sorting for performance
    const filteredAndSearchedComplaints = useMemo(() => {
        return filteredComplaints.filter(complaint => {
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = complaint.id.toLowerCase().includes(searchLower) ||
                                  complaint.subject.toLowerCase().includes(searchLower) ||
                                  complaint.description.toLowerCase().includes(searchLower);
            const matchesStatus = statusFilter === 'all' || 
                                  complaint.status.toLowerCase() === statusFilter.toLowerCase();
            return matchesSearch && matchesStatus;
        });
    }, [filteredComplaints, searchTerm, statusFilter]);

    // ENHANCED: Use sorting hook
    const { items: sortedComplaints, requestSort, sortConfig } = useSortableData(filteredAndSearchedComplaints, { key: 'submittedAt', direction: 'descending' });

    // NEW: Export to CSV functionality
    const exportToCSV = () => {
        const headers = ["Complaint ID", "Subject", "Description", "Priority", "Status", "Submitted At", "Contact", "Assigned Department"];
        const csvRows = [
            headers.join(','),
            ...sortedComplaints.map(c => [
                `"${c.id}"`,
                `"${c.subject.replace(/"/g, '""')}"`,
                `"${c.description.replace(/"/g, '""')}"`,
                `"${c.priority}"`,
                `"${c.status}"`,
                `"${new Date(c.submittedAt).toISOString()}"`,
                `"${c.email}"`,
                `"${c.assignedDepartment}"`
            ].join(','))
        ];
        
        const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `${selectedSubDepartment}-complaints-${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-0">
             {/* Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                 <div className="flex items-center justify-between">
                     <div className="flex items-center space-x-4">
                        <button onClick={onBack} className="text-orange-600 hover:text-orange-800 font-medium flex items-center gap-2 group">
                             <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                             <span>Back to Home</span>
                         </button>
                         <div className="h-6 w-px bg-gray-300"></div>
                         <div className="flex items-center space-x-3">
                             <div className="p-2 bg-orange-100 rounded-lg">
                                 <Users className="h-6 w-6 text-orange-600" />
                             </div>
                             <div>
                                 <h1 className="text-xl font-bold text-gray-900">Staff Dashboard</h1>
                                 <p className="text-sm text-gray-600">Complaint Management System</p>
                             </div>
                         </div>
                     </div>
                    <button onClick={onLogout} className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium">
                         Logout
                     </button>
                 </div>
             </div>

            {/* Department Selection */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Department Selection</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Department</label>
                        <select value={selectedDepartment} onChange={(e) => handleDepartmentChange(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                            <option value="">Choose a department...</option>
                            {Object.keys(departmentStructure).map(dept => (<option key={dept} value={dept}>{dept}</option>))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Sub-Department</label>
                        <select value={selectedSubDepartment} onChange={(e) => handleSubDepartmentChange(e.target.value)} disabled={!selectedDepartment || isLoading} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-100">
                            <option value="">Choose a sub-department...</option>
                            {selectedDepartment && departmentStructure[selectedDepartment].map(subDept => (<option key={subDept} value={subDept}>{subDept}</option>))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Filters, Search, and Complaint Table */}
            {selectedSubDepartment ? (
                <>
                {/* Filters and Search */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                         <div className="flex items-center space-x-4">
                             <h3 className="text-lg font-bold text-gray-900">{selectedSubDepartment} Complaints</h3>
                             <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                                 {sortedComplaints.length} complaints
                             </span>
                         </div>
                         <div className="flex flex-col sm:flex-row gap-4">
                             <div className="relative">
                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                 <input type="text" placeholder="Search complaints..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full sm:w-64"/>
                             </div>
                             <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                 <option value="all">All Status</option>
                                 <option value="pending">Pending</option>
                                 <option value="in progress">In Progress</option>
                                 <option value="resolved">Resolved</option>
                                 <option value="closed">Closed</option>
                             </select>
                             <button onClick={resetFilters} className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors" title="Refresh and clear filters">
                                 <RefreshCw className="h-4 w-4" />
                                 <span>Clear</span>
                             </button>
                             <button onClick={exportToCSV} disabled={sortedComplaints.length === 0} className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed">
                                 <Download className="h-4 w-4" />
                                 <span>Export</span>
                             </button>
                         </div>
                     </div>
                 </div>
                 {/* Complaints Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                     {isLoading ? (
                         <div className="overflow-x-auto">
                           <table className="min-w-full">
                             <thead className="bg-gray-50">
                                <tr>
                                  <th className="px-6 py-3 h-12"></th><th className="px-6 py-3 h-12"></th><th className="px-6 py-3 h-12"></th><th className="px-6 py-3 h-12"></th><th className="px-6 py-3 h-12"></th><th className="px-6 py-3 h-12"></th><th className="px-6 py-3 h-12"></th>
                                </tr>
                             </thead>
                             <tbody>
                               <SkeletonRow /><SkeletonRow /><SkeletonRow /><SkeletonRow />
                             </tbody>
                           </table>
                         </div>
                     ) : sortedComplaints.length > 0 ? (
                        <ComplaintTable complaints={sortedComplaints} onSort={requestSort} sortConfig={sortConfig} navigate={navigate} />
                     ) : (
                         <div className="text-center py-12">
                             <div className="flex justify-center mb-4"><div className="p-3 bg-gray-100 rounded-xl"><Search className="h-8 w-8 text-gray-400" /></div></div>
                             <h3 className="text-lg font-medium text-gray-900 mb-2">No Complaints Found</h3>
                             <p className="text-gray-600">No complaints assigned to <strong>{selectedSubDepartment}</strong> match your current filters.</p>
                         </div>
                     )}
                 </div>
                </>
            ) : (
                // NEW: Call to action when no department is selected
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 text-center py-20">
                    <div className="flex justify-center mb-4"><div className="p-3 bg-blue-100 rounded-xl"><FileText className="h-10 w-10 text-blue-500" /></div></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome to the Dashboard</h3>
                    <p className="text-gray-600 max-w-md mx-auto">Please select a department and sub-department from the dropdowns above to view and manage assigned complaints.</p>
                </div>
            )}
        </div>
    );
}

// Main Parent Component
const StaffLoginPage = ({ onBack, complaints, navigate }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // ENHANCED: Async login with simulated API call
    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate a network request
        setTimeout(() => {
            if (loginData.username === 'admin' && loginData.password === 'admin') {
                setIsLoggedIn(true);
                setLoginData({ username: '', password: '' }); // Clear fields after login
            } else {
                setError('Invalid credentials! Please use admin/admin.');
            }
            setIsLoading(false);
        }, 1000);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setError('');
    }

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                        <div className="flex items-center justify-between mb-6">
                            <button onClick={onBack} className="text-orange-600 hover:text-orange-800 font-medium flex items-center gap-2 group">
                                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                                <span>Back to Home</span>
                            </button>
                        </div>
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-4"><div className="p-3 bg-orange-100 rounded-xl"><Shield className="h-8 w-8 text-orange-600" /></div></div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Staff Login Portal</h1>
                            <p className="text-gray-600">Access the complaint management dashboard</p>
                        </div>
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Login ID</label>
                                <input type="text" value={loginData.username} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Enter your login ID" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <input type="password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Enter your password" required />
                            </div>

                            {/* ENHANCED: Inline error message */}
                            {error && (
                                <div className="flex items-center space-x-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                                    <AlertCircle className="h-4 w-4" />
                                    <span>{error}</span>
                                </div>
                            )}

                            <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:bg-blue-400 disabled:cursor-wait">
                                {isLoading ? (
                                    <>
                                        <Loader className="h-5 w-5 animate-spin" />
                                        <span>Authenticating...</span>
                                    </>
                                ) : (
                                    <>
                                        <Shield className="h-5 w-5" />
                                        <span>Login to Dashboard</span>
                                    </>
                                )}
                            </button>
                        </form>
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-600 text-center">
                                <strong>Demo Credentials:</strong><br />Username: admin<br />Password: admin
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Render the dashboard view once logged in
    return <StaffDashboard onBack={onBack} complaintsData={complaints} navigate={navigate} onLogout={handleLogout} />;
};

export default StaffLoginPage;