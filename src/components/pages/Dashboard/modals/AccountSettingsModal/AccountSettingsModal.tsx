"use client";
import { Settings } from "lucide-react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const AccountSettingsModal = ({
  open,
  onClose,
  profile,
  setProfile,
  loadingProfile,
}: any) => {
  if (!open) return null;

  const avatarUrl = profile?.avatar
    ? `${BACKEND_URL}/${profile.avatar}`
    : "/users/avatar.png";

  return (
    <div className="settings-overlay">
      <div className="settings-modal">
        <Settings size={18} />
        <h2>Account Settings</h2>
        <hr />

        {loadingProfile ? (
          <p>Loading profile...</p>
        ) : (
          <>
            {/* AVATAR */}
            <div className="avatar-section">
              <img src={avatarUrl} className="avatar-preview" alt="User Avatar" />
              <label className="avatar-upload">
                Change Avatar
                <input type="file" hidden />
              </label>
            </div>

            {/* FORM */}
            <div className="settings-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={profile?.name || ""}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" value={profile?.email || ""} disabled />
              </div>

              <div className="form-group">
                <label>Role</label>
                <input type="text" value={profile?.role || ""} disabled />
              </div>

              <div className="form-group">
                <label>Created At</label>
                <input
                  type="text"
                  value={
                    profile?.createdAt
                      ? new Date(profile.createdAt).toLocaleString()
                      : ""
                  }
                  disabled
                />
              </div>

              <div className="form-group">
                <label>Updated At</label>
                <input
                  type="text"
                  value={
                    profile?.updatedAt
                      ? new Date(profile.updatedAt).toLocaleString()
                      : ""
                  }
                  disabled
                />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="settings-actions">
              <button className="btn cancel" onClick={onClose}>
                Cancel
              </button>
              <button className="btn update">
                Update Profile
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountSettingsModal;
