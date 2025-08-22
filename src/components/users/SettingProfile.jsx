import { Formik, Form, Field } from "formik";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
import SecondaryButton from "../ui/SecondaryButton";
import InputProfile from "./InputProfile";
import { useChangePassword } from "../../hooks/useChangePassword";

const SettingProfile = ({ name, email }) => {
  const { mutate, isLoading } = useUpdateProfile();
  const { mutate: changePassword, isLoading: isChanging } = useChangePassword();

  return (
    <div className="bg-white px-8 py-10 rounded-lg shadow-md">
      <h3 className="text-base font-semibold text-gray-800 mb-4">
        User Settings
      </h3>

      <Formik
        initialValues={{
          new_full_name: name || "",
          new_email: email || "",
        }}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700">Details</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <Field
                  as={InputProfile}
                  name="new_full_name"
                  placeholder="Full name"
                  value={values.new_full_name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <p className="text-sm text-gray-600">Email</p>
                <Field
                  as={InputProfile}
                  name="new_email"
                  type="email"
                  placeholder="Email"
                  value={values.new_email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <SecondaryButton type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save changes"}
            </SecondaryButton>
          </Form>
        )}
      </Formik>

      <div className="mt-8 space-y-4">
        <h4 className="text-sm font-medium text-gray-700">Password</h4>

        <Formik
          initialValues={{
            old_password: "",
            new_password: "",
            confirm_new_password: "",
          }}
          onSubmit={(values, { resetForm }) => {
            changePassword(values, {
              onSuccess: () => {
                resetForm();
              },
            });
          }}
        >
          {({ values, handleChange, errors, touched }) => (
            <Form className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Change password</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
                  <Field
                    as={InputProfile}
                    type="password"
                    name="old_password"
                    placeholder="Put your password..."
                    value={values.old_password}
                    onChange={handleChange}
                  />
                  {touched.old_password && errors.old_password && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.old_password}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600">New password</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
                  <Field
                    as={InputProfile}
                    type="password"
                    name="new_password"
                    placeholder="Put your new password..."
                    value={values.new_password}
                    onChange={handleChange}
                  />
                  <Field
                    as={InputProfile}
                    type="password"
                    name="confirm_new_password"
                    placeholder="Confirm new password..."
                    value={values.confirm_new_password}
                    onChange={handleChange}
                  />
                </div>
                {touched.new_password && errors.new_password && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.new_password}
                  </p>
                )}
                {touched.confirm_new_password &&
                  errors.confirm_new_password && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.confirm_new_password}
                    </p>
                  )}
              </div>

              <div className="flex justify-between items-center">
                <SecondaryButton type="submit" disabled={isChanging}>
                  {isChanging ? "Changing..." : "Change password"}
                </SecondaryButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SettingProfile;
