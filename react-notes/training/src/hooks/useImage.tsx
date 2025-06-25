import { useEffect, useState } from "react";
/**
 * Notes on this solution:
 * This uses vites import glob to statically define all the image file paths.
 * If we want something mroe scalable than producing a big map of all images 
 * I would need to look into the webpack side of things 
 * 
 * Further real world applications would send the pfp in the api request for user pfps
 * the client would not be sotring them in its local assets
 * 
 * - Is it possible to make my dummy api send img blobs? 
 * 
 */
const modules = import.meta.glob('../assets/avatars/*.{png,jpg,jpeg,svg}', { eager: true });

const images: Record<string, string> = {};
for (const path in modules) {
  const mod = modules[path] as { default: string };
  console.log(mod)
  const fileName = path.split('/').pop() || '';
  images[fileName] = mod.default;
}
console.log('images', images);

export const useImage = (fileName: string) => {
  const [image, setImage] = useState<string | null>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImage();
  }, [fileName]);

  const fetchImage = async () => {
    try {
      const imageUrl = images[fileName];
      if (!imageUrl) {
        throw new Error(`Image ${fileName}s not found`);
      }
      setImage(imageUrl);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'unknown error occurred when fetching img');
    } finally {
      setLoading(false);
    }
  };
  return {image, error, loading}
};
