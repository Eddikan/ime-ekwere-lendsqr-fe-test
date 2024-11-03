
interface Route {
    icon: string;
    name: string;
    route: string;
}

interface MenuItem {
    section: string;
    routes: Route[];
}

const menuItems: MenuItem[] = [
    {
        section: "CUSTOMERS",
        routes: [
            { icon: '/sideBarIcons/users.svg', name: "Users", route: "/users" },
            { icon: '/sideBarIcons/guarantors.svg', name: "Guarantors", route: "/guarantors" },
            { icon: '/sideBarIcons/loans.svg', name: "Loans", route: "/loans" },
            { icon: '/sideBarIcons/decisionModel.svg', name: "Decision Models", route: "/decisionModel" },
            { icon: '/sideBarIcons/savings.svg', name: "Savings", route: "/savings" },
            { icon: '/sideBarIcons/loanRequest.svg', name: "Loan Requests", route: "/loanRequests" },
            { icon: '/sideBarIcons/whiteList.svg', name: "Whitelist", route: "/whiteList" },
            { icon: '/sideBarIcons/karma.svg', name: "Karma", route: "/karma" },

        ],
    },
    {
        section: "BUSINESSES",
        routes: [
            { icon: '/sideBarIcons/organization.svg', name: "Organization", route: "/organization" },
            { icon: '/sideBarIcons/loanRequest.svg', name: "Loan Products", route: "/loanProducts" },
            { icon: '/sideBarIcons/savingsProduct.svg', name: "Savings Products", route: "/savingsProduct" },
            { icon: '/sideBarIcons/feesAndCharges.svg', name: "Fees and Charges", route: "/feesAndCharges" },
            { icon: '/sideBarIcons/transactions.svg', name: "Transactions", route: "/transactions" },
            { icon: '/sideBarIcons/services.svg', name: "Services", route: "/services" },
            { icon: '/sideBarIcons/serviceAccount.svg', name: "Service Account", route: "/serviceAccount" },
            { icon: '/sideBarIcons/settlements.svg', name: "Settlements", route: "/settlements" },
            { icon: '/sideBarIcons/reports.svg', name: "Reports", route: "/reports" },


        ],
    },
    {
        section: "SETTINGS",
        routes: [
            { icon: '/sideBarIcons/preferences.svg', name: "Preferences", route: "/preferences" },
            { icon: '/sideBarIcons/feesAndPricing.svg', name: "Fees and Pricing", route: "/feesAndPricing" },
            { icon: '/sideBarIcons/auditLogs.svg', name: "Audit Logs", route: "/auditLogs" },

        ],
    },
];

export default menuItems;
