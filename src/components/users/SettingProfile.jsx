import InputProfile from "./InputProfile";
import SecondaryButton from "../ui/SecondaryButton";

const SettingProfile = ({ name, lastName, email, phone }) => {
  return (
    <div className="bg-white px-8 py-10 rounded-lg shadow-md">
      <h3 className="text-base font-semibold text-gray-800 mb-4">
        User Settings
      </h3>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-700">Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Name</p>
            <InputProfile value={name} placeholder="First name" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <InputProfile type="email" value={email} placeholder="Email" />
          </div>
        </div>
        <SecondaryButton children={"Save changes"} />
      </div>

      {/* Password */}
      <div className="mt-8 space-y-4">
        <h4 className="text-sm font-medium text-gray-700">Password</h4>

        <div>
          <label className="text-sm text-gray-600">Change password</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            <InputProfile type="password" placeholder="Put your password..." />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600">New password</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            <InputProfile
              type="password"
              placeholder="Put your new password..."
            />
            <InputProfile
              type="password"
              placeholder="Confirm new password..."
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <SecondaryButton children={"Change password"} />
        </div>
      </div>
    </div>
  );
};

export default SettingProfile;
