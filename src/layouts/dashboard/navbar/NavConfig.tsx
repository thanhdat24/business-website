// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import Label from "../../../components/Label";
import SvgIconStyle from "../../../components/SvgIconStyle";

// ----------------------------------------------------------------------

type IconName = "ic_user" | "ic_invoice" | "ic_analytics" | "ic_billing";

const getIcon = (name: IconName): React.ReactNode => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  analytics: getIcon("ic_analytics"),
  user: getIcon("ic_user"),
  receipt: getIcon("ic_invoice"),
  billing: getIcon("ic_billing"),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "Tổng quan",
    items: [
      {
        title: "Thống kê",
        path: PATH_DASHBOARD.general.dashboard,
        icon: ICONS.analytics,
      },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: "Quản lý khách hàng",
    items: [
      // USER
      {
        title: "Khách hàng",
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: "Danh sách", path: PATH_DASHBOARD.user.list },
          { title: "Tạo", path: PATH_DASHBOARD.user.new },
          { title: "Tài khoản", path: PATH_DASHBOARD.user.account },
        ],
      },
      // Loại khách hàng
      {
        title: "Loại Khách hàng",
        path: PATH_DASHBOARD.userType.root,
        icon: ICONS.user,
        children: [
          { title: "Danh sách", path: PATH_DASHBOARD.userType.list },
          { title: "Tạo", path: PATH_DASHBOARD.userType.new },
        ],
      },
    ],
  },

  {
    subheader: "Quản lý thông tin sử dụng",
    items: [
      // RECEIPT
      {
        title: "Kỳ thu",
        path: PATH_DASHBOARD.billingPeriod.root,
        icon: ICONS.receipt,
        children: [
          { title: "Danh sách", path: PATH_DASHBOARD.billingPeriod.list },
          { title: "Tạo", path: PATH_DASHBOARD.billingPeriod.new },
        ],
      },
      {
        title: "Phiếu thu",
        path: PATH_DASHBOARD.receipt.root,
        icon: ICONS.receipt,
        children: [
          { title: "Danh sách", path: PATH_DASHBOARD.receipt.list },
          { title: "Tạo", path: PATH_DASHBOARD.receipt.new },
        ],
      },
    ],
  },

  {
    subheader: "Quản lý danh mục hệ thống",
    items: [
      // RECEIPT
      {
        title: "Nhân viên",
        path: PATH_DASHBOARD.staff.root,
        icon: ICONS.user,
        children: [
          { title: "Danh sách", path: PATH_DASHBOARD.staff.list },
          { title: "Tạo", path: PATH_DASHBOARD.staff.new },
        ],
      },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
];

export default navConfig;
