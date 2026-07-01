"use client";
import "./logout.css";
import Cookies from "js-cookie";
import { X, Power, ChevronsRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { showSuccessToast } from "@/components/pages/common/ToastMessages/toastUtils";

const LogoutConfirmModal = ({ open, onClose }: any) => {
  const router = useRouter();

  const handleLogout = () => {
    showSuccessToast("Logout successfully");
    Cookies.remove("token");
    router.push("/");
    router.refresh();
  };

  if (!open) return null;

  return (
    <div className="settings-overlay">
      <div className="settings-modal logout-modal">

        {/* Center Icon */}
        <div className="logout-icon">
          <Power size={30} />
        </div>

        {/* Title */}
        <h2 className="logout-title">Logout Confirmation</h2>

        {/* Close */}
        <X className="close-icon" onClick={onClose} />

        {/* Text */}
        <p className="logout-text">
          Are you sure you want to sign out of
          <span> Infinity Domains?</span>
        </p>

        {/* Sub text */}
        <div className="logout-subtext">
          <ChevronsRight />
          <p>Please select an option below to proceed</p>
        </div>

        {/* Actions */}
        <div className="logout-actions">
          <button className="btn cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn logout" onClick={handleLogout}>
            Confirm
          </button>
        </div>

      </div>
    </div>
  );
};

export default LogoutConfirmModal;
