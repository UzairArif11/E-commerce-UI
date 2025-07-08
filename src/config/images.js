// Global Image Configuration
// This file centralizes all image paths and can be easily updated from API
const IMAGE_BASE_PATH = '/assets/images/';

// Helper function to get full image path
const getImagePath = (imageName) => `${IMAGE_BASE_PATH}${imageName}`;

// Brand and Company Images
export const brandImages = {
  apple: getImagePath('1200px-Apple_gray_logo 1.png'),
  appStore: getImagePath('download-appstore.png'),
  googlePlay: getImagePath('png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'),
};

// Product Images
export const productImages = {
  // Electronics
  iPhone: getImagePath('hero_endframe__cvklg0xk3w6e_large 2.jpg'),
  amazonEcho: getImagePath('69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'),
  gamingLaptop: getImagePath('ideapad-gaming-3i-01-500x500 1.png'),
  monitor: getImagePath('g27cq4-500x500 1.png'),
  camera: getImagePath('eos-250d-03-500x500 1.png'),
  ps5: getImagePath('ps5-slim-goedkope-playstation_large 1.png'),
  jblSpeaker: getImagePath('JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'),
  gamingMouse: getImagePath('g92-2-500x500 1.png'),
  cooler: getImagePath('gammaxx-l240-argb-1-500x500 1.png'),
  headphones: getImagePath('ak-900-01-500x500 1.png'),
  
  // Fashion
  gucciJacket: getImagePath('672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png'),
  quiltedJacket: getImagePath('698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png'),
  gucciBag: getImagePath('547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png'),
  womanPortrait: getImagePath('attractive-woman-wearing-hat-posing-black-background 1.jpg'),
  
  // Sports
  footballBoots: getImagePath('Copa_Sense 1.png'),
  
  // Kids
  toyMercedes: getImagePath('New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png'),
  
  // Home & Beauty
  skincare1: getImagePath('curology-j7pKVQrTUsM-unsplash 1.png'),
  skincare2: getImagePath('sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png'),
  skincare3: getImagePath('sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png'),
};

// Category Images
export const categoryImages = {
  electronics: getImagePath('image 30.png'),
  fashion: getImagePath('image 31.png'),
  home: getImagePath('image 32.png'),
  sports: getImagePath('image 33.png'),
  beauty: getImagePath('image 46.png'),
  books: getImagePath('image 47.png'),
};

// UI Elements and Icons
export const uiImages = {
  qrCode: getImagePath('Qrcode 1.jpg'),
  rectangle: getImagePath('Rectangle.png'),
  rectangle6: getImagePath('Rectangle 6.png'),
  placeholder: getImagePath('Place your Design.png'),
  musicAlbum: getImagePath('dl.beatsnoop 1.jpg'),
  camera2: getImagePath('71RdoeXxtrL 1.jpg'),
  pattern: getImagePath('652e82cd70aa6522dd785109a455904c.png'),
};

// Hero and Banner Images
export const heroImages = {
  shoppingWomen: getImagePath('portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.jpg'),
  hero1: getImagePath('image 51.png'),
  hero2: getImagePath('image 57.png'),
  hero3: getImagePath('image 58.png'),
  hero4: getImagePath('image 59.png'),
  hero5: getImagePath('image 61.png'),
  hero6: getImagePath('image 63.png'),
};

// Gaming Products
export const gamingImages = {
  gamepad: getImagePath('GP11_PRD3 1.png'),
};

// Default/Fallback Images
export const defaultImages = {
  product: getImagePath('Place your Design.png'),
  category: getImagePath('Rectangle.png'),
  user: getImagePath('Place your Design.png'),
  hero: getImagePath('image 51.png'),
};

// Function to get image by category and name
export const getImage = (category, imageName) => {
  const categories = {
    brand: brandImages,
    product: productImages,
    category: categoryImages,
    ui: uiImages,
    hero: heroImages,
    gaming: gamingImages,
    default: defaultImages,
  };
  
  return categories[category]?.[imageName] || defaultImages.product;
};

// Function to update images from API (for future use)
export const updateImagesFromAPI = async (apiEndpoint) => {
  try {
    const response = await fetch(apiEndpoint);
    const imageData = await response.json();
    
    // Update image configurations based on API response
    // This can be implemented when backend API is ready
    console.log('Images updated from API:', imageData);
    return imageData;
  } catch (error) {
    console.error('Failed to update images from API:', error);
    return null;
  }
};

// Export all image categories
export default {
  brandImages,
  productImages,
  categoryImages,
  uiImages,
  heroImages,
  gamingImages,
  defaultImages,
  getImage,
  updateImagesFromAPI,
};
