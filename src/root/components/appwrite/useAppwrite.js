import { useAppwrite as useAppwriteInternal } from 'appwrite'; // Assuming there's an internal useAppwrite hook provided by Appwrite

export const useAppwrite = () => {
  const { client, isAuthenticated, user } = useAppwriteInternal(); // Using the internal hook from Appwrite
  return { client, isAuthenticated, user };
};
