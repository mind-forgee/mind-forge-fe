import UserHeader from "../../components/users/UserHeader";
import HeadProfile from "../../components/users/HeadProfile";
import InformationProfile from "../../components/users/InformationProfile";
import SettingProfile from "../../components/users/SettingProfile";
import { useGetUser } from "../../hooks/useGetUser";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { useLogout } from "../../hooks/useLogout";
import { useGetUserCourse } from "../../hooks/useGetUserCourse";

const Profile = () => {
  const { data: user, isLoading } = useGetUser();
  const { data: course, isLoadingCourse } = useGetUserCourse();
  const userCourse = course?.course;
  console.log("course from profile", userCourse);
  const { mutate: logout } = useLogout();

  if (isLoading || isLoadingCourse) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>User not found. Please log in.</p>
      </div>
    );
  }

  return (
    <section className="py-12 min-h-screen mt-16 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <UserHeader
          subTitle="Profile Information and Personalization"
          title="Your Profile"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col gap-6">
            <HeadProfile
              name={user.full_name}
              email={user.email}
              avatar={user.avatar}
            />
            <InformationProfile
              name={user.full_name}
              email={user.email}
              phone={"08237213123"}
              plan={userCourse?.title}
              level={userCourse?.difficulty}
              onLogout={logout}
            />
          </div>
          <div className="md:col-span-2">
            <SettingProfile
              name={user.full_name}
              email={user.email}
              lastName={"Didi"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
