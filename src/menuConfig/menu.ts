
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
            //   { icon: GuarantorsIcon, name: "Guarantors", route: "/guarantors" },
            //   { icon: LoansIcon, name: "Loans", route: "/loans" },
            //   { icon: DecisionModelsIcon, name: "Decision Models", route: "/decision-models" },
            //   { icon: SavingsIcon, name: "Savings", route: "/savings" },
            //   { icon: LoanRequestsIcon, name: "Loan Requests", route: "/loan-requests" },
            //   { icon: WhitelistIcon, name: "Whitelist", route: "/whitelist" },
            //   { icon: KarmaIcon, name: "Karma", route: "/karma" },
        ],
    },
    //   {
    //     section: "BUSINESSES",
    //     routes: [
    //       { icon: OrganizationIcon, name: "Organization", route: "/organization" },
    //       { icon: LoanProductsIcon, name: "Loan Products", route: "/loan-products" },
    //       { icon: SavingsProductsIcon, name: "Savings Products", route: "/savings-products" },
    //       { icon: FeesAndChargesIcon, name: "Fees and Charges", route: "/fees-and-charges" },
    //       { icon: TransactionsIcon, name: "Transactions", route: "/transactions" },
    //       { icon: ServicesIcon, name: "Services", route: "/services" },
    //       { icon: ServiceAccountIcon, name: "Service Account", route: "/service-account" },
    //       { icon: SettlementsIcon, name: "Settlements", route: "/settlements" },
    //       { icon: ReportsIcon, name: "Reports", route: "/reports" },
    //     ],
    //   },
    //   {
    //     section: "SETTINGS",
    //     routes: [
    //       { icon: PreferencesIcon, name: "Preferences", route: "/preferences" },
    //       { icon: FeesAndPricingIcon, name: "Fees and Pricing", route: "/fees-and-pricing" },
    //       { icon: AuditLogsIcon, name: "Audit Logs", route: "/audit-logs" },
    //     ],
    //   },
];

export default menuItems;
