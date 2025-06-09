import React, { useState, useEffect } from 'react';
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
    XCircle
} from 'lucide-react';

const StaffLoginPage = ({ onBack, complaints, navigate }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedSubDepartment, setSelectedSubDepartment] = useState('');
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    // Department and Subdepartment mapping
    const departmentStructure = {
        'Emergency': [
            'Emergency Response Team',
            'Operations Emergency Team'
        ],
        'Safety & Security': [
            'RPF Security Team',
            'Women Safety Cell',
            'Account Security Team'
        ],
        'Refund & Financial': [
            'Finance Refund Team',
            'Payment Gateway Support',
            'Finance Dispute Team'
        ],
        'Ticketing & Booking': [
            'Booking Support Team',
            'Tatkal Support Team',
            'Urgent Ticketing Support'
        ],
        'Catering & Food': [
            'Catering Quality Team',
            'Premium Catering Team',
            'IRCTC E-Catering Team'
        ],
        'Technical Issues': [
            'Web Portal Backend Support',
            'IT Support Level 1',
            'Payment Gateway Support'
        ],
        'Staff Behavior': [
            'HR Disciplinary Team',
            'Employee Grievance Cell',
            'HR Recognition Team'
        ],
        'Cleanliness & Maintenance': [
            'Coaching Maintenance Team',
            'Electrical Team',
            'AC Maintenance Team'
        ],
        'Train Operations': [
            'Operations Analytics Team',
            'System Monitoring Team',
            'High Density Route Support'
        ],
        'Accessibility': [
            'Accessibility Support Team',
            'Accessibility Digital Team',
            'Senior Citizen Support Team'
        ],
        'Station Amenities': [
            'NR Station Management',
            'SR Station Management',
            'Commercial Station Section'
        ],
        'Premium Services': [
            'Premium User Support',
            'Premium Catering Team',
            'Premium Maintenance Team'
        ],
        'Social Media & PR': [
            'Social Media Crisis Team',
            'Public Relations Crisis Team',
            'Content Moderation Team'
        ],
        'Default Assignment': [
            'General Grievance Cell'
        ]
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginData.username === 'admin' && loginData.password === 'admin') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials! Please use admin/admin');
        }
    };

    const handleDepartmentChange = (department) => {
        setSelectedDepartment(department);
        setSelectedSubDepartment('');
        setFilteredComplaints([]);
    };

    const handleSubDepartmentChange = (subDepartment) => {
        setSelectedSubDepartment(subDepartment);
        filterComplaintsByDepartment(subDepartment);
    };

    const filterComplaintsByDepartment = (subDepartment) => {
        if (!subDepartment || !complaints) return;
        
        const filtered = Object.values(complaints).filter(complaint => 
            complaint.assignedDepartment === subDepartment
        );
        setFilteredComplaints(filtered);
    };

    const getStatusIcon = (status) => {
        switch (status.toLowerCase()) {
            case 'resolved':
                return <CheckCircle className="h-4 w-4 text-green-600" />;
            case 'in progress':
                return <Clock className="h-4 w-4 text-yellow-600" />;
            case 'pending':
                return <AlertCircle className="h-4 w-4 text-orange-600" />;
            case 'closed':
                return <XCircle className="h-4 w-4 text-red-600" />;
            default:
                return <Clock className="h-4 w-4 text-gray-600" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'resolved':
                return 'bg-green-100 text-green-800';
            case 'in progress':
                return 'bg-yellow-100 text-yellow-800';
            case 'pending':
                return 'bg-orange-100 text-orange-800';
            case 'closed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority.toLowerCase()) {
            case 'critical':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'urgent':
                return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'high':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'medium':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'low':
                return 'bg-gray-100 text-gray-800 border-gray-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const filteredAndSearchedComplaints = filteredComplaints.filter(complaint => {
        const matchesSearch = complaint.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            complaint.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            complaint.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesStatus = statusFilter === 'all' || 
                            complaint.status.toLowerCase() === statusFilter.toLowerCase();
        
        return matchesSearch && matchesStatus;
    });

    if (!isLoggedIn) {
        return (
            <div className="max-w-md mx-auto mt-20">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                    <div className="flex items-center justify-between mb-6">
                        <button 
                            onClick={onBack} 
                            className="text-orange-600 hover:text-orange-800 font-medium flex items-center gap-2 group"
                        >
                            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Home</span>
                        </button>
                    </div>

                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-orange-100 rounded-xl">
                                <Shield className="h-8 w-8 text-orange-600" />
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            Staff Login Portal
                        </h1>
                        <p className="text-gray-600">
                            Access the complaint management dashboard
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Login ID
                            </label>
                            <input
                                type="text"
                                value={loginData.username}
                                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Enter your login ID"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={loginData.password}
                                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                       <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"

>
    <Shield className="h-5 w-5" />
    Login to Dashboard
</button>

                    </form>
                    
                    

                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 text-center">
                            <strong>Demo Credentials:</strong><br />
                            Username: admin<br />
                            Password: admin
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={onBack} 
                            className="text-orange-600 hover:text-orange-800 font-medium flex items-center gap-2 group"
                        >
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

                    <button
                        onClick={() => setIsLoggedIn(false)}
                        className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Department Selection */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Department Selection</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Department Dropdown */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Department
                        </label>
                        <select
                            value={selectedDepartment}
                            onChange={(e) => handleDepartmentChange(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                            <option value="">Choose a department...</option>
                            {Object.keys(departmentStructure).map(dept => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>

                    {/* Sub-Department Dropdown */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Sub-Department
                        </label>
                        <select
                            value={selectedSubDepartment}
                            onChange={(e) => handleSubDepartmentChange(e.target.value)}
                            disabled={!selectedDepartment}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-100"
                        >
                            <option value="">Choose a sub-department...</option>
                            {selectedDepartment && departmentStructure[selectedDepartment].map(subDept => (
                                <option key={subDept} value={subDept}>{subDept}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            {selectedSubDepartment && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center space-x-4">
                            <h3 className="text-lg font-bold text-gray-900">
                                {selectedSubDepartment} Complaints
                            </h3>
                            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                                {filteredAndSearchedComplaints.length} complaints
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search complaints..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent w-64"
                                />
                            </div>

                            {/* Status Filter */}
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            >
                                <option value="all">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="in progress">In Progress</option>
                                <option value="resolved">Resolved</option>
                                <option value="closed">Closed</option>
                            </select>

                            {/* Export Button */}
                            <button className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                                <Download className="h-4 w-4" />
                                <span>Export</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Complaints Table */}
            {selectedSubDepartment && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {filteredAndSearchedComplaints.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Complaint ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Subject
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Priority
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Submitted Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Contact
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredAndSearchedComplaints.map((complaint) => (
                                        <tr key={complaint.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {complaint.id}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                                                {complaint.subject}
                                            </td>
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
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {complaint.email}
                                            </td>
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
                    ) : (
                        <div className="text-center py-12">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-gray-100 rounded-xl">
                                    <AlertCircle className="h-8 w-8 text-gray-400" />
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No Complaints Found</h3>
                            <p className="text-gray-600">
                                {selectedSubDepartment ? 
                                    `No complaints assigned to ${selectedSubDepartment} match your current filters.` :
                                    'Please select a department and sub-department to view complaints.'
                                }
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default StaffLoginPage;
