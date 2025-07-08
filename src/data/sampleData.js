import { productImages, categoryImages } from '../config/images';

export const sampleProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.5,
    reviewCount: 156,
    image: productImages.headphones,
    category: "electronics",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    inStock: true,
    features: ["Noise Cancellation", "30-hour Battery", "Quick Charge", "Comfortable Fit"]
  },
  {
    id: 2,
    name: "Gucci x North Face Coat",
    price: 2499.99,
    originalPrice: 2999.99,
    discount: 17,
    rating: 4.8,
    reviewCount: 89,
    image: productImages.gucciJacket,
    category: "fashion",
    description: "Luxury designer collaboration coat with premium materials.",
    inStock: true,
    features: ["Designer Collaboration", "Premium Materials", "Limited Edition", "Waterproof"]
  },
  {
    id: 3,
    name: "iPhone 14 Pro",
    price: 999.99,
    originalPrice: 1099.99,
    discount: 9,
    rating: 4.7,
    reviewCount: 1234,
    image: productImages.iPhone,
    category: "electronics",
    description: "Latest iPhone with advanced camera system and A16 Bionic chip.",
    inStock: true,
    features: ["A16 Bionic Chip", "Pro Camera System", "5G Ready", "Face ID"]
  },
  {
    id: 4,
    name: "Gaming Monitor 27 QHD",
    price: 299.99,
    rating: 4.4,
    reviewCount: 167,
    image: productImages.monitor,
    category: "electronics",
    description: "High refresh rate gaming monitor with QHD resolution.",
    inStock: true,
    features: ["144Hz Refresh Rate", "QHD Resolution", "1ms Response Time", "FreeSync"]
  },
  {
    id: 5,
    name: "Adidas Copa Sense Football Boots",
    price: 189.99,
    rating: 4.6,
    reviewCount: 312,
    image: productImages.footballBoots,
    category: "sports",
    description: "Professional football boots with enhanced touch and control.",
    inStock: true,
    features: ["Enhanced Touch", "Lightweight", "Professional Grade", "Comfortable Fit"]
  },
  {
    id: 6,
    name: "Organic Skincare Set",
    price: 89.99,
    rating: 4.3,
    reviewCount: 445,
    image: productImages.skincare1,
    category: "beauty",
    description: "Complete organic skincare routine for healthy, glowing skin.",
    inStock: true,
    features: ["Organic Ingredients", "All Skin Types", "Cruelty Free", "Dermatologist Tested"]
  },
  {
    id: 7,
    name: "PlayStation 5 Slim",
    price: 499.99,
    originalPrice: 599.99,
    discount: 17,
    rating: 4.9,
    reviewCount: 2890,
    image: productImages.ps5,
    category: "electronics",
    description: "Next-generation gaming console with ultra-fast SSD.",
    inStock: true,
    features: ["Ultra-Fast SSD", "Ray Tracing", "4K Gaming", "Haptic Feedback"]
  },
  {
    id: 8,
    name: "JBL Boombox 2",
    price: 399.99,
    rating: 4.5,
    reviewCount: 203,
    image: productImages.jblSpeaker,
    category: "electronics",
    description: "Powerful portable speaker with massive sound and deep bass.",
    inStock: true,
    features: ["24 Hour Battery", "Waterproof", "Deep Bass", "Bluetooth 5.1"]
  },
  {
    id: 9,
    name: "Canon EOS 250D Camera",
    price: 549.99,
    originalPrice: 649.99,
    discount: 15,
    rating: 4.6,
    reviewCount: 156,
    image: productImages.camera,
    category: "electronics",
    description: "Compact DSLR camera perfect for beginners and enthusiasts.",
    inStock: true,
    features: ["24.1MP Sensor", "4K Video", "Vari-angle Screen", "Wi-Fi Enabled"]
  },
  {
    id: 10,
    name: "Amazon Echo Smart Speaker",
    price: 99.99,
    originalPrice: 129.99,
    discount: 23,
    rating: 4.4,
    reviewCount: 1678,
    image: productImages.amazonEcho,
    category: "electronics",
    description: "Smart speaker with Alexa voice assistant for your smart home.",
    inStock: true,
    features: ["Alexa Built-in", "Smart Home Hub", "Premium Audio", "Voice Control"]
  }
];

export const categories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    image: categoryImages.electronics,
    description: "Latest gadgets and electronic devices"
  },
  {
    id: 2,
    name: "Fashion",
    slug: "fashion",
    image: categoryImages.fashion,
    description: "Trendy clothing and accessories"
  },
  {
    id: 3,
    name: "Home & Garden",
    slug: "home",
    image: categoryImages.home,
    description: "Everything for your home and garden"
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    slug: "sports",
    image: categoryImages.sports,
    description: "Sports equipment and outdoor gear"
  },
  {
    id: 5,
    name: "Beauty & Health",
    slug: "beauty",
    image: categoryImages.beauty,
    description: "Beauty products and health essentials"
  },
  {
    id: 6,
    name: "Books",
    slug: "books",
    image: categoryImages.books,
    description: "Books for all interests and ages"
  }
];

export const featuredProducts = sampleProducts.slice(0, 4);

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Excellent products and fast shipping! I'm very satisfied with my purchase.",
    avatar: "/api/placeholder/50/50"
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    comment: "Great customer service and quality products. Highly recommended!",
    avatar: "/api/placeholder/50/50"
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 4,
    comment: "Love the variety of products available. Will definitely shop here again.",
    avatar: "/api/placeholder/50/50"
  }
];
