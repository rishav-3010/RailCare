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
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [touchStartY, setTouchStartY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Mobile-specific viewport and keyboard handling
    useEffect(() => {
        const handleResize = () => {
            const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
            const screenHeight = window.screen.height;
            setIsKeyboardVisible(viewportHeight < screenHeight * 0.75);
        };

        const handleTouchStart = (e) => {
            setTouchStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e) => {
    // Only prevent overscroll in very specific edge cases
    if (window.scrollY === 0 && e.touches[0].clientY > touchStartY + 100) {
        const isFormElement = e.target.closest('input, textarea, select, button');
        if (!isFormElement) {
            e.preventDefault();
        }
    }
};

        const handleOrientationChange = () => {
            // Handle orientation changes on mobile
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        };

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', handleResize);
        }
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleOrientationChange);
        document.addEventListener('touchstart', handleTouchStart, { passive: true });
        document.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            if (window.visualViewport) {
                window.visualViewport.removeEventListener('resize', handleResize);
            }
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleOrientationChange);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, [touchStartY]);

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
            
            // Haptic feedback on successful login
            if (navigator.vibrate) {
                navigator.vibrate([50, 50, 50]);
            }
        } else {
            alert('Invalid credentials! Please use admin/admin');
            
            // Error haptic feedback
            if (navigator.vibrate) {
                navigator.vibrate(200);
            }
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setLoggedInUser(null);
        setSelectedDepartment('');
        setSelectedSubDepartment('');
        setFilteredComplaints([]);
        setLoginData({ username: '', password: '' });
        setEditingComplaint(null);
        setIsMobileMenuOpen(false);
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
        
        // Scroll to the editing row on mobile
        setTimeout(() => {
            const editingRow = document.querySelector(`[data-complaint-id="${complaint.id}"]`);
            if (editingRow) {
                editingRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
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
        
        // Success haptic feedback
        if (navigator.vibrate) {
            navigator.vibrate([50, 50, 50]);
        }
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
            <div className="flex items-center justify-center py-8 sm:py-12 px-3 sm:px-4">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <button 
                                onClick={onBack} 
                                className="text-orange-600 hover:text-orange-800 font-medium flex items-center gap-2 group touch-manipulation"
                                style={{ minHeight: '44px' }}
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
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                Staff Login Portal
                            </h1>
                            <p className="text-sm sm:text-base text-gray-600">
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base"
                                    placeholder="Enter your login ID"
                                    required
                                    style={{ fontSize: '16px' }} // Prevent zoom on iOS
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base"
                                    placeholder="Enter your password"
                                    required
                                    style={{ fontSize: '16px' }} // Prevent zoom on iOS
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 touch-manipulation"
                                style={{ minHeight: '48px' }}
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
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            {/* Mobile-optimized Header */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                        <button 
                            onClick={onBack} 
                            className="text-orange-600 hover:text-orange-800 font-medium flex items-center gap-2 group touch-manipulation"
                            style={{ minHeight: '44px' }}
                        >
                            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="hidden sm:inline">Back to Home</span>
                            <span className="sm:hidden">Back</span>
                        </button>
                        
                        <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
                        
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-orange-100 rounded-lg">
                                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                            </div>
                            <div>
                                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Staff Dashboard</h1>
                                <p className="text-xs sm:text-sm text-gray-600">Complaint Management System</p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile-optimized User Info */}
                    <div className="flex items-center justify-between sm:justify-end space-x-3 sm:space-x-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg px-3 sm:px-4 py-2 flex-1 sm:flex-none">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                                        <span className="text-sm font-bold text-green-800 truncate">
                                            {loggedInUser?.username}
                                        </span>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            {loggedInUser?.role}
                                        </span>
                                    </div>
                                    <div className="text-xs text-green-600 truncate">
                                        Logged in: {loggedInUser?.loginTime}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="px-3 sm:px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium flex items-center space-x-2 touch-manipulation flex-shrink-0"
                            style={{ minHeight: '44px' }}
                        >
                            <XCircle className="h-4 w-4" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile-optimized Department Selection */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-4 sm:mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Department Selection</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Department
                        </label>
                        <select
                            value={selectedDepartment}
                            onChange={(e) => handleDepartmentChange(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base touch-manipulation"
                            style={{ fontSize: '16px' }} // Prevent zoom on iOS
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-100 text-base touch-manipulation"
                            style={{ fontSize: '16px' }} // Prevent zoom on iOS
                        >
                            <option value="">Choose a sub-department...</option>
                            {selectedDepartment && departmentStructure[selectedDepartment].map(subDept => (
                                <option key={subDept} value={subDept}>{subDept}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Mobile-optimized Filters and Search */}
            {selectedDepartment && (
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-4 sm:mb-6">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                <h3 className="text-lg font-bold text-gray-900">
                                    {selectedSubDepartment 
                                        ? `${selectedSubDepartment} Complaints` 
                                        : `${selectedDepartment} Department - All Complaints`
                                    }
                                </h3>
                                <div className="flex items-center space-x-2">
                                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                                        {filteredAndSearchedComplaints.length} complaints
                                    </span>
                                    {!selectedSubDepartment && (
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                            All Subdepartments
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search complaints..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base"
                                    style={{ fontSize: '16px' }} // Prevent zoom on iOS
                                />
                            </div>

                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base touch-manipulation"
                                style={{ fontSize: '16px' }} // Prevent zoom on iOS
                            >
                                <option value="all">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="in progress">In Progress</option>
                                <option value="resolved">Resolved</option>
                                <option value="closed">Closed</option>
                                <option value="escalated">Escalated</option>
                            </select>

                            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors touch-manipulation whitespace-nowrap"
                                style={{ minHeight: '48px' }}
                            >
                                <Download className="h-4 w-4" />
                                <span>Export</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile-optimized Complaints Table */}
            {selectedDepartment && (
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {filteredAndSearchedComplaints.length > 0 ? (
                        <>
                            {/* Desktop Table View */}
                            <div className="hidden lg:block overflow-x-auto">
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
                                                <tr className="hover:bg-gray-50" data-complaint-id={complaint.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        {complaint.id}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
    <div className="break-words whitespace-normal leading-tight">
        {complaint.subject}
    </div>
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

                            {/* Mobile Card View */}
                            <div className="lg:hidden">
                                <div className="divide-y divide-gray-200">
                                    {filteredAndSearchedComplaints.map((complaint) => (
                                        <div key={complaint.id} className="p-4 space-y-3" data-complaint-id={complaint.id}>
                                            {/* Complaint Header */}
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center space-x-2 mb-1">
                                                        <span className="text-sm font-bold text-gray-900 truncate">
                                                            {complaint.id}
                                                        </span>
                                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(complaint.priority)}`}>
                                                            {complaint.priority}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight">
                                                        {complaint.subject}
                                                    </h3>
                                                </div>
                                                <div className="flex items-center space-x-2 ml-3">
                                                    {getStatusIcon(complaint.status)}
                                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                                                        {complaint.status}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Complaint Details */}
                                            <div className="grid grid-cols-2 gap-3 text-xs">
                                                <div>
                                                    <span className="text-gray-500 font-medium">Submitted:</span>
                                                    <div className="text-gray-900">{new Date(complaint.submittedAt).toLocaleDateString()}</div>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500 font-medium">Contact:</span>
                                                    <div className="text-gray-900 truncate">{complaint.email}</div>
                                                </div>
                                            </div>

                                            {/* Status Update Section */}
                                            {editingComplaint === complaint.id ? (
                                                <div className="space-y-3 bg-gray-50 p-3 rounded-lg">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                            Update Status
                                                        </label>
                                                        <select
                                                            value={newStatus}
                                                            onChange={(e) => setNewStatus(e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                                                            style={{ fontSize: '16px' }} // Prevent zoom on iOS
                                                        >
                                                            {statusOptions.map(status => (
                                                                <option key={status} value={status}>{status}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                            Add Remark
                                                        </label>
                                                        <textarea
                                                            value={newRemark}
                                                            onChange={(e) => setNewRemark(e.target.value)}
                                                            placeholder="Enter your remark here..."
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none"
                                                            rows="3"
                                                            style={{ fontSize: '16px' }} // Prevent zoom on iOS
                                                        />
                                                    </div>

                                                    {complaint.remarks && complaint.remarks.length > 0 && (
                                                        <div>
                                                            <h4 className="text-sm font-medium text-gray-700 mb-2">Previous Remarks:</h4>
                                                            <div className="space-y-2 max-h-24 overflow-y-auto">
                                                                {complaint.remarks.map((remark, index) => (
                                                                    <div key={index} className="bg-white p-2 rounded border text-xs">
                                                                        <div className="flex justify-between items-start mb-1">
                                                                            <span className="font-medium text-gray-800">{remark.staff}</span>
                                                                            <span className="text-gray-500">{new Date(remark.date).toLocaleDateString()}</span>
                                                                        </div>
                                                                        <p className="text-gray-700 line-clamp-2">{remark.remark}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="flex space-x-2">
                                                        <button
                                                            onClick={() => handleSaveChanges(complaint.id)}
                                                            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors touch-manipulation"
                                                            style={{ minHeight: '44px' }}
                                                        >
                                                            <Save className="h-4 w-4" />
                                                            <span>Save Changes</span>
                                                        </button>
                                                        <button
                                                            onClick={handleCancelEdit}
                                                            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors touch-manipulation"
                                                            style={{ minHeight: '44px' }}
                                                        >
                                                            <X className="h-4 w-4" />
                                                            <span>Cancel</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => navigate(`/dashboard/${complaint.id}`)}
                                                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors touch-manipulation"
                                                        style={{ minHeight: '44px' }}
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                        <span>View Details</span>
                                                    </button>
                                                    <button
                                                        onClick={() => handleEditComplaint(complaint)}
                                                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors touch-manipulation"
                                                        style={{ minHeight: '44px' }}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                        <span>Edit Status</span>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12 px-4">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-gray-100 rounded-xl">
                                    <AlertCircle className="h-8 w-8 text-gray-400" />
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No Complaints Found</h3>
                            <p className="text-gray-600 text-sm sm:text-base">
                                {selectedSubDepartment ? 
                                    `No complaints assigned to ${selectedSubDepartment} match your current filters.` :
                                    `No complaints found for ${selectedDepartment} department with current filters.`
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
