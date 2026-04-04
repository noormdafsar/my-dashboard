import RoleSwitcher from '../../features/auth/RoleSwitcher';

const Navbar = () => {
    // 1. Add function here (inside component)
    const toggleDark = () => {
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className="h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6">
            <h1 className="text-lg font-semibold">Dashboard</h1>

            {/* 2. Add button + RoleSwitcher */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleDark}
                    className="border px-3 py-1 rounded"
                >
                    Toggle Dark
                </button>

                <RoleSwitcher />
            </div>
        </div>
    );
};

export default Navbar;