import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CommentBankIcon from "@mui/icons-material/CommentBank";
import PaymentsIcon from "@mui/icons-material/Payments";
import LanguageIcon from "@mui/icons-material/Language";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BrushIcon from "@mui/icons-material/Brush";
import SettingsIcon from "@mui/icons-material/Settings";

export const sideNavbarCommerce = [
  { title: "Dashboard", icon: <DashboardIcon /> },
  {
    title: "Products",
    icon: <InventoryIcon />,
    subItems: [{ title: "Add Product" }, { title: "Product List" }, { title: "Categories" }, { title: "Brands" }],
  },
  {
    title: "Orders",
    icon: <ShoppingCartIcon />,
    subItems: [{ title: "Order List" }, { title: "Order Details" }],
  },
  { title: "Customers", icon: <SupervisorAccountIcon /> },
  { title: "Statistics", icon: <EqualizerIcon /> },
  { title: "Review", icon: <CommentBankIcon /> },
  { title: "Transactions", icon: <PaymentsIcon /> },
  { title: "Sellers", icon: <LanguageIcon /> },
  { title: "Hot Offers", icon: <LocalOfferIcon /> },
];

export const sideNavbarListSettings = [
  { title: "Appearance", icon: <BrushIcon /> },
  { title: "Settings", icon: <SettingsIcon /> },
];
