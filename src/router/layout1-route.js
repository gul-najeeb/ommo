import Layout1 from "../layouts/backend/Layout1";

// //main
import Dashbord from "../views/backend/Main/Dashbord";
// Calendar
import Calendar from "../views/backend/Main/Calendar";

// Customer
import Customer from "../views/backend/Main/Customer";
import Customeradd from "../views/backend/Main/Customeradd";
import Customerview from "../views/backend/Main/Cutomerview";
import Customeredit from "../views/backend/Main/Customeredit";

// Product
import Product from "../views/backend/Main/Product";
import Productadd from "../views/backend/Main/Productadd";

// order
import Order from "../views/backend/Main/Order";
import Ordernew from "../views/backend/Main/Ordernew";
import Orderdetails from "../views/backend/Main/Orderdetails";

//App
import UserProfile from "../views/backend/App/UserManagement/UserProfile";
import UserAdd from "../views/backend/App/UserManagement/UserAdd";
import UserList from "../views/backend/App/UserManagement/UserList";
import UserPrivacySetting from "../views/backend/App/UserManagement/UserPrivacySetting";
import UserAccountSettingList from "../views/backend/App/UserManagement/UserAccountSetting";
import UserProfileEdit from "../views/backend/App/UserManagement/UserProfileEdit";
import Chat from "../views/backend/App/Chat";
import Todo from "../views/backend/App/Todo";

//Chart
import ApexChart from "../views/backend/Chart/ApexChart";

//From
import Checkbox from "../views/backend/Forms/FormControls/Checkbox";
import Elements from "../views/backend/Forms/FormControls/Elements";
import Inputs from "../views/backend/Forms/FormControls/Inputs";
import Radio from "../views/backend/Forms/FormControls/Radio";
import FromSwitch from "../views/backend/Forms/FormControls/Switch";
import TextArea from "../views/backend/Forms/FormControls/TextArea";
import Validations from "../views/backend/Forms/FormControls/Validations";
import Datepicker from "../views/backend/Forms/Formwidget/Datepicker";
import Fileupload from "../views/backend/Forms/Formwidget/Fileupload";
import FormQuill from "../views/backend/Forms/Formwidget/FormQuill";
import Select from "../views/backend/Forms/Formwidget/Select";
import Invoiceview from "../views/backend/pages/Invoiceview";

//Extrapages
import Timeline1 from "../views/backend/pages/Timeline/Timeline1";
import Pricing1 from "../views/backend/pages/Pricing/Pricing1";
import Invoice from "../views/backend/pages/Invoice";
import FAQ from "../views/backend/pages/FAQ";
import BlankPage from "../views/backend/pages/BlankPage";
import TermsOfUse from "../views/backend/pages/Extrapages/TermsOfUse";
import PrivacyPolicy from "../views/backend/pages/Extrapages/PrivacyPolicy";

//Table
import BasicTable from "../views/backend/Table/BasicTable";
import DataTable from "../views/backend/Table/DataTable";
import EditTable from "../views/backend/Table/EditTable";

//ui
import UiAlerts from "../views/backend/ui/UiAlerts";
import UiAvatars from "../views/backend/ui/UiAvatars";
import UiBadges from "../views/backend/ui/UiBadges";
import UiBoxShadows from "../views/backend/ui/UiBoxShadows";
import UiBreadcrumbs from "../views/backend/ui/UiBreadcrumbs";
import UiButtonGroups from "../views/backend/ui/UiButtonGroups";
import UiButtons from "../views/backend/ui/UiButtons";
import UiCards from "../views/backend/ui/UiCards";
import UiCarousels from "../views/backend/ui/UiCarousels";
import UiColors from "../views/backend/ui/UiColors";
import UiEmbed from "../views/backend/ui/UiEmbed";
import UiGrids from "../views/backend/ui/UiGrids";
import UiImages from "../views/backend/ui/UiImages";
import UiListGroups from "../views/backend/ui/UiListGroups";
import UiMediaObjects from "../views/backend/ui/UiMediaObjects";
import UiModals from "../views/backend/ui/UiModals";
import UiNotifications from "../views/backend/ui/UiNotifications";
import UiPaginations from "../views/backend/ui/UiPaginations";
import UiPopOvers from "../views/backend/ui/UiPopOvers";
import UiProgressBars from "../views/backend/ui/UiProgressBars";
import UiTabs from "../views/backend/ui/UiTabs";
import UiTooltips from "../views/backend/ui/UiTooltips";
import UiTypography from "../views/backend/ui/UiTypography";

// icon-heroicon
import Heroicons from "../views/backend/Icons/Heroicons ";

export const Layout1Route = [
  {
    path: "/",
    element: <Layout1 />,
    children: [
      {
        path: "/",
        element: <Dashbord />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/user-add",
        element: <UserAdd />,
      },
      {
        path: "/user-list",
        element: <UserList />,
      },
      {
        path: "/user-privacy-setting",
        element: <UserPrivacySetting />,
      },
      {
        path: "/user-account-setting",
        element: <UserAccountSettingList />,
      },
      {
        path: "/user-profile-edit",
        element: <UserProfileEdit />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/chart-apex",
        element: <ApexChart />,
      },
      {
        path: "/form-chechbox",
        element: <Checkbox />,
      },
      {
        path: "/form-layout",
        element: <Elements />,
      },
      {
        path: "/form-input-group",
        element: <Inputs />,
      },
      {
        path: "/form-radio",
        element: <Radio />,
      },
      {
        path: "/form-switch",
        element: <FromSwitch />,
      },
      {
        path: "/form-textarea",
        element: <TextArea />,
      },
      {
        path: "/form-validation",
        element: <Validations />,
      },
      {
        path: "/form-datepicker",
        element: <Datepicker />,
      },
      {
        path: "/form-file-uploader",
        element: <Fileupload />,
      },
      {
        path: "/form-quill",
        element: <FormQuill />,
      },
      {
        path: "/form-select",
        element: <Select />,
      },
      {
        path: "/icon-heroicon",
        element: <Heroicons />,
      },
      {
        path: "/timeline-1",
        element: <Timeline1 />,
      },
      {
        path: "/pricing-1",
        element: <Pricing1 />,
      },
      {
        path: "/pages-invoice",
        element: <Invoice />,
      },
      {
        path: "/pages-faq",
        element: <FAQ />,
      },
      {
        path: "/pages-blank-page",
        element: <BlankPage />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfUse />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/invoice-view",
        element: <Invoiceview />,
      },
      {
        path: "/tables-basic",
        element: <BasicTable />,
      },
      {
        path: "/tables-data",
        element: <DataTable />,
      },
      {
        path: "/tables-editable",
        element: <EditTable />,
      },
      {
        path: "/ui-alerts",
        element: <UiAlerts />,
      },
      {
        path: "/ui-avatars",
        element: <UiAvatars />,
      },
      {
        path: "/ui-badges",
        element: <UiBadges />,
      },
      {
        path: "/ui-boxshadow",
        element: <UiBoxShadows />,
      },
      {
        path: "/ui-breadcrumb",
        element: <UiBreadcrumbs />,
      },
      {
        path: "/ui-buttons-group",
        element: <UiButtonGroups />,
      },
      {
        path: "/ui-buttons",
        element: <UiButtons />,
      },
      {
        path: "/ui-cards",
        element: <UiCards />,
      },
      {
        path: "/ui-carousel",
        element: <UiCarousels />,
      },
      {
        path: "/ui-colors",
        element: <UiColors />,
      },
      {
        path: "/ui-embed-video",
        element: <UiEmbed />,
      },
      {
        path: "/ui-grid",
        element: <UiGrids />,
      },
      {
        path: "/ui-images",
        element: <UiImages />,
      },
      {
        path: "/ui-list-group",
        element: <UiListGroups />,
      },
      {
        path: "/ui-media-object",
        element: <UiMediaObjects />,
      },
      {
        path: "/ui-modal",
        element: <UiModals />,
      },
      {
        path: "/ui-notifications",
        element: <UiNotifications />,
      },
      {
        path: "/ui-pagination",
        element: <UiPaginations />,
      },
      {
        path: "/ui-popovers",
        element: <UiPopOvers />,
      },
      {
        path: "/ui-progressbars",
        element: <UiProgressBars />,
      },
      {
        path: "/ui-tabs",
        element: <UiTabs />,
      },
      {
        path: "/ui-tooltips",
        element: <UiTooltips />,
      },
      {
        path: "/ui-typography",
        element: <UiTypography />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/customer-add",
        element: <Customeradd />,
      },
      {
        path: "/customer-view",
        element: <Customerview />,
      },
      {
        path: "/customer-edit",
        element: <Customeredit />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product-add",
        element: <Productadd />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order-new",
        element: <Ordernew />,
      },
      {
        path: "/order-details",
        element: <Orderdetails />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
    ],
  },
];
