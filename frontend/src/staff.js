import React, { useState, useEffect, useMemo } from 'react';
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
    Edit,
    Save,
    X,
    MessageSquare
} from 'lucide-react';

const StaffLoginPage = ({ onBack, complaints, navigate }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedSubDepartment, setSelectedSubDepartment] = useState('');
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [editingComplaint, setEditingComplaint] = useState(null);
    const [newStatus, setNewStatus] = useState('');
    const [newRemark, setNewRemark] = useState('');

    // Sample complaints data for staff dashboard
    const [staffComplaints, setStaffComplaints] = useState({
        'CMP2025060701': {
            id: 'CMP2025060701',
            subject: 'Refund not processed for failed booking',
            description: 'Payment was deducted from my account but the ticket was not booked. Transaction ID: TXN123456789',
            priority: 'high',
            status: 'In Progress',
            submittedAt: '2025-06-07T10:15:00Z',
            email: 'user@example.com',
            phone: '+91 9876543210',
            assignedDepartment: 'Finance Refund Team',
            pnr: '2456879541',
            category: 'Refund & Financial',
            remarks: [
                { date: '2025-06-07T10:30:00Z', staff: 'John Doe', remark: 'Initial review completed. Forwarding to payment gateway team.' },
                { date: '2025-06-08T14:20:00Z', staff: 'Jane Smith', remark: 'Payment gateway confirmed transaction failure. Processing refund.' }
            ]
        },
        'CMP2025060702': {
            id: 'CMP2025060702',
            subject: 'Double charge for same booking',
            description: 'I was charged twice for the same ticket booking. Need immediate refund for duplicate charge.',
            priority: 'urgent',
            status: 'Pending',
            submittedAt: '2025-06-08T09:30:00Z',
            email: 'customer2@example.com',
            phone: '+91 9876543211',
            assignedDepartment: 'Finance Refund Team',
            pnr: '1234567890',
            category: 'Refund & Financial',
            remarks: [
                { date: '2025-06-08T09:45:00Z', staff: 'Admin', remark: 'Complaint received and assigned to finance team.' }
            ]
        },
        'CMP2025060703': {
            id: 'CMP2025060703',
            subject: 'Payment gateway timeout during booking',
            description: 'Payment gateway showed timeout error but amount was deducted from bank account.',
            priority: 'medium',
            status: 'Resolved',
            submittedAt: '2025-06-06T16:45:00Z',
            email: 'user3@example.com',
            phone: '+91 9876543212',
            assignedDepartment: 'Payment Gateway Support',
            pnr: 'N/A',
            category: 'Technical Issues',
            remarks: [
                { date: '2025-06-06T17:00:00Z', staff: 'Tech Support', remark: 'Investigating payment gateway logs.' },
                { date: '2025-06-07T11:30:00Z', staff: 'Tech Support', remark: 'Issue identified and resolved. Refund processed.' }
            ]
        },
        'CMP2025060704': {
            id: 'CMP2025060704',
            subject: 'Unable to cancel ticket online',
            description: 'Website showing error when trying to cancel confirmed ticket. Need immediate assistance.',
            priority: 'high',
            status: 'In Progress',
            submittedAt: '2025-06-09T08:20:00Z',
            email: 'passenger@example.com',
            phone: '+91 9876543213',
            assignedDepartment: 'Payment Gateway Support',
            pnr: '9876543210',
            category: 'Technical Issues',
            remarks: [
                { date: '2025-06-09T08:30:00Z', staff: 'Support Agent', remark: 'Ticket cancellation issue reported. Checking system logs.' }
            ]
        },
        'CMP2025060705': {
            id: 'CMP2025060705',
            subject: 'Fraudulent transaction on my account',
            description: 'Unknown booking made from my account. Suspect unauthorized access. Please investigate urgently.',
            priority: 'critical',
            status: 'Pending',
            submittedAt: '2025-06-09T12:15:00Z',
            email: 'security@example.com',
            phone: '+91 9876543214',
            assignedDepartment: 'Finance Dispute Team',
            pnr: '5555666677',
            category: 'Refund & Financial',
            remarks: []
        }
    });

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

    const statusOptions = ['Pending', 'In Progress', 'Resolved', 'Closed', 'Escalated'];

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginData.username === 'admin' && loginData.password === 'admin') {
            setIsLoggedIn(true);
            setLoggedInUser({
                username: loginData.username,
                role: 'Administrator',
                loginTime: new Date().toLocaleString(),
                department: 'System Administration'
            });
        } else {
            alert('Invalid credentials! Please use admin/admin');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setLoggedInUser(null);
        setSelectedDepartment('');
        setSelectedSubDepartment('');
        setFilteredComplaints([]);
        setLoginData({ username: '', password: '' });
    };

    const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
    setSelectedSubDepartment('');
    
    if (department) {
        // When department is selected, show all complaints from its subdepartments
        const subdepartments = departmentStructure[department] || [];
        const filtered = Object.values(staffComplaints).filter(complaint => 
            subdepartments.includes(complaint.assignedDepartment)
        );
        setFilteredComplaints(filtered);
        console.log('Department selected:', department, 'Showing complaints from subdepartments:', subdepartments, 'Found:', filtered.length);
    } else {
        setFilteredComplaints([]);
    }
};



    const handleSubDepartmentChange = (subDepartment) => {
        setSelectedSubDepartment(subDepartment);
        filterComplaintsByDepartment(subDepartment);
    };

    const filterComplaintsByDepartment = (subDepartment) => {
    console.log('Filtering - Department:', selectedDepartment, 'SubDepartment:', subDepartment);
    
    let filtered = [];
    
    if (subDepartment) {
        // If subdepartment is selected, filter by specific subdepartment
        filtered = Object.values(staffComplaints).filter(complaint => 
            complaint.assignedDepartment === subDepartment
        );
        console.log('Filtering by subdepartment:', subDepartment, 'Found:', filtered.length);
    } else if (selectedDepartment) {
        // If only department is selected, show all complaints from all its subdepartments
        const subdepartments = departmentStructure[selectedDepartment] || [];
        filtered = Object.values(staffComplaints).filter(complaint => 
            subdepartments.includes(complaint.assignedDepartment)
        );
        console.log('Filtering by department:', selectedDepartment, 'Subdepartments:', subdepartments, 'Found:', filtered.length);
    }
    
    console.log('Final filtered complaints:', filtered);
    setFilteredComplaints(filtered);
};



    const handleEditComplaint = (complaint) => {
        setEditingComplaint(complaint.id);
        setNewStatus(complaint.status);
        setNewRemark('');
    };

    const handleSaveChanges = (complaintId) => {
        const currentTime = new Date().toISOString();
        const staffName = loggedInUser.username;

        setStaffComplaints(prev => ({
            ...prev,
            [complaintId]: {
                ...prev[complaintId],
                status: newStatus,
                remarks: [
                    ...prev[complaintId].remarks,
                    ...(newRemark.trim() ? [{
                        date: currentTime,
                        staff: staffName,
                        remark: newRemark.trim()
                    }] : [])
                ]
            }
        }));

        // Update filtered complaints
        setFilteredComplaints(prev => prev.map(complaint => 
            complaint.id === complaintId 
                ? {
                    ...complaint,
                    status: newStatus,
                    remarks: [
                        ...complaint.remarks,
                        ...(newRemark.trim() ? [{
                            date: currentTime,
                            staff: staffName,
                            remark: newRemark.trim()
                        }] : [])
                    ]
                }
                : complaint
        ));

        setEditingComplaint(null);
        setNewStatus('');
        setNewRemark('');
    };

    const handleCancelEdit = () => {
        setEditingComplaint(null);
        setNewStatus('');
        setNewRemark('');
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
            case 'escalated':
                return <AlertCircle className="h-4 w-4 text-red-600" />;
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
            case 'escalated':
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

    const filteredAndSearchedComplaints = useMemo(() => {
        return filteredComplaints.filter(complaint => {
            const matchesSearch = complaint.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                complaint.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                complaint.description.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesStatus = statusFilter === 'all' || 
                                complaint.status.toLowerCase() === statusFilter.toLowerCase();
            
            return matchesSearch && matchesStatus;
        });
    }, [filteredComplaints, searchTerm, statusFilter]);

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
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
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

                    {/* User Info */}
                    <div className="flex items-center space-x-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <Shield className="h-4 w-4 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm font-bold text-green-800">
                                                {loggedInUser?.username}
                                            </span>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                {loggedInUser?.role}
                                            </span>
                                        </div>
                                        <div className="text-xs text-green-600">
                                            Logged in: {loggedInUser?.loginTime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium flex items-center space-x-2"
                        >
                            <XCircle className="h-4 w-4" />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Department Selection */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Department Selection</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
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
            {/* Updated Filters and Search */}
{selectedDepartment && (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
                <h3 className="text-lg font-bold text-gray-900">
                    {selectedSubDepartment 
                        ? `${selectedSubDepartment} Complaints` 
                        : `${selectedDepartment} Department - All Complaints`
                    }
                </h3>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    {filteredAndSearchedComplaints.length} complaints
                </span>
                {!selectedSubDepartment && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        All Subdepartments
                    </span>
                )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
                    <option value="escalated">Escalated</option>
                </select>

                <button className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                    <Download className="h-4 w-4" />
                    <span>Export</span>
                </button>
            </div>
        </div>
    </div>
)}


            {/* Complaints Table */}
            {selectedDepartment  && (
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
                                        <React.Fragment key={complaint.id}>
                                            <tr className="hover:bg-gray-50">
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
                                                    {editingComplaint === complaint.id ? (
                                                        <select
                                                            value={newStatus}
                                                            onChange={(e) => setNewStatus(e.target.value)}
                                                            className="text-xs border border-gray-300 rounded px-2 py-1"
                                                        >
                                                            {statusOptions.map(status => (
                                                                <option key={status} value={status}>{status}</option>
                                                            ))}
                                                        </select>
                                                    ) : (
                                                        <div className="flex items-center space-x-2">
                                                            {getStatusIcon(complaint.status)}
                                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                                                                {complaint.status}
                                                            </span>
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {new Date(complaint.submittedAt).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {complaint.email}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <div className="flex items-center space-x-2">
                                                        {editingComplaint === complaint.id ? (
                                                            <>
                                                                <button
                                                                    onClick={() => handleSaveChanges(complaint.id)}
                                                                    className="text-green-600 hover:text-green-900 flex items-center space-x-1"
                                                                >
                                                                    <Save className="h-4 w-4" />
                                                                    <span>Save</span>
                                                                </button>
                                                                <button
                                                                    onClick={handleCancelEdit}
                                                                    className="text-red-600 hover:text-red-900 flex items-center space-x-1"
                                                                >
                                                                    <X className="h-4 w-4" />
                                                                    <span>Cancel</span>
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button
                                                                    onClick={() => navigate(`/dashboard/${complaint.id}`)}
                                                                    className="text-orange-600 hover:text-orange-900 flex items-center space-x-1"
                                                                >
                                                                    <Eye className="h-4 w-4" />
                                                                    <span>View</span>
                                                                </button>
                                                                <button
                                                                    onClick={() => handleEditComplaint(complaint)}
                                                                    className="text-blue-600 hover:text-blue-900 flex items-center space-x-1"
                                                                >
                                                                    <Edit className="h-4 w-4" />
                                                                    <span>Edit</span>
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                            {editingComplaint === complaint.id && (
                                                <tr>
                                                    <td colSpan="7" className="px-6 py-4 bg-gray-50">
                                                        <div className="space-y-3">
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                    Add Remark
                                                                </label>
                                                                <textarea
                                                                    value={newRemark}
                                                                    onChange={(e) => setNewRemark(e.target.value)}
                                                                    placeholder="Enter your remark here..."
                                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                                                                    rows="3"
                                                                />
                                                            </div>
                                                            {complaint.remarks && complaint.remarks.length > 0 && (
                                                                <div>
                                                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Previous Remarks:</h4>
                                                                    <div className="space-y-2 max-h-32 overflow-y-auto">
                                                                        {complaint.remarks.map((remark, index) => (
                                                                            <div key={index} className="bg-white p-2 rounded border text-xs">
                                                                                <div className="flex justify-between items-start mb-1">
                                                                                    <span className="font-medium text-gray-800">{remark.staff}</span>
                                                                                    <span className="text-gray-500">{new Date(remark.date).toLocaleString()}</span>
                                                                                </div>
                                                                                <p className="text-gray-700">{remark.remark}</p>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
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
