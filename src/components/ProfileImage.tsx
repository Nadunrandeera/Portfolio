const ProfileImage = () => {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8">
      <img
        src="https://avatars.githubusercontent.com/u/126862247?v=4"
        alt="Your Name"
        className="rounded-full w-full h-full object-cover shadow-lg ring-4 ring-blue-600 dark:ring-blue-500"
      />
      <div className="absolute inset-0 rounded-full bg-blue-600 opacity-10 dark:opacity-20"></div>
    </div>
  );
};

export default ProfileImage;
