import { useImage } from "../hooks/useImage";

export const Image = () => {
  const {image, error, loading} = useImage('pfp-1.png');
   if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <img src={image ?? undefined} alt="Profile" />
  );
}