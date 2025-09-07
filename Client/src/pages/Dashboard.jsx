import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { authService } from '../services/api';
import toast from 'react-hot-toast';
import Spinner from '../components/shared/Spinner';
import Button from '../components/shared/Button';

const Dashboard = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    const handleSendVerification = async () => {
        try {
            const { data } = await authService.sendVerifyOtp();
            if (data.success) {
                toast.success('Verification OTP sent to your email.');
                navigate('/verify-email');
            } else {
                toast.error(data.message || 'Failed to send OTP.');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred.');
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><Spinner /></div>;
    }

    return (
        <div className="container mx-auto mt-10 p-5">
            <div className="bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                {user ? (
                    <div>
                        <p className="text-xl">Welcome, <span className="font-semibold">{user.name}!</span></p>
                        
                        {!user.isAccountVerified && (
                            <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
                                <p className="font-bold">Account Not Verified</p>
                                <p>Please verify your email address to unlock all features.</p>
                                <Button onClick={handleSendVerification} className="mt-3 !w-auto text-sm">
                                    Send Verification Email
                                </Button>
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Could not load user information.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;