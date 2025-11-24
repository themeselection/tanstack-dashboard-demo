import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type Product = {
    id: string
    name: string
    category: string
    price: number
    stock: number
    status: 'active' | 'draft' | 'archived'
    image: string
}

// Define the type for the data parameter
type ProductQueryParams = {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    filters?: {
        name?: string;
        category?: string;
        status?: string;
    };
};

const products: Product[] = [
    {
        id: 'PROD-001',
        name: 'Wireless Noise Cancelling Headphones',
        category: 'Electronics',
        price: 299.99,
        stock: 45,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80',
    },
    {
        id: 'PROD-002',
        name: 'Ergonomic Office Chair',
        category: 'Furniture',
        price: 199.50,
        stock: 12,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=100&q=80',
    },
    {
        id: 'PROD-003',
        name: 'Mechanical Gaming Keyboard',
        category: 'Electronics',
        price: 129.99,
        stock: 0,
        status: 'archived',
        image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=100&q=80',
    },
    {
        id: 'PROD-004',
        name: 'Smart Fitness Watch',
        category: 'Wearables',
        price: 149.00,
        stock: 89,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80',
    },
    {
        id: 'PROD-005',
        name: 'Minimalist Desk Lamp',
        category: 'Lighting',
        price: 45.00,
        stock: 23,
        status: 'draft',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=100&q=80',
    },
    {
        id: 'PROD-006',
        name: 'Portable Bluetooth Speaker',
        category: 'Electronics',
        price: 79.99,
        stock: 150,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&q=80',
    },
    {
        id: 'PROD-007',
        name: 'Ceramic Coffee Mug Set',
        category: 'Kitchen',
        price: 24.99,
        stock: 200,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=100&q=80',
    },
    {
        id: 'PROD-008',
        name: 'Leather Messenger Bag',
        category: 'Accessories',
        price: 129.50,
        stock: 15,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&q=80',
    },
    {
        id: 'PROD-009',
        name: 'Wireless Charging Pad',
        category: 'Electronics',
        price: 39.99,
        stock: 75,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&q=80',
    },
    {
        id: 'PROD-010',
        name: 'Succulent Plant Set',
        category: 'Home & Garden',
        price: 29.99,
        stock: 30,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=100&q=80',
    },
    {
        id: 'PROD-011',
        name: 'Professional Chef Knife',
        category: 'Kitchen',
        price: 89.95,
        stock: 42,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=100&q=80',
    },
    {
        id: 'PROD-012',
        name: 'Yoga Mat',
        category: 'Fitness',
        price: 35.00,
        stock: 100,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=100&q=80',
    },
    {
        id: 'PROD-013',
        name: 'Smart Thermostat',
        category: 'Home Automation',
        price: 199.00,
        stock: 0,
        status: 'archived',
        image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=100&q=80',
    },
    {
        id: 'PROD-014',
        name: 'Vintage Film Camera',
        category: 'Photography',
        price: 450.00,
        stock: 3,
        status: 'draft',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100&q=80',
    },
    {
        id: 'PROD-015',
        name: 'Cotton T-Shirt Pack',
        category: 'Apparel',
        price: 49.99,
        stock: 150,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&q=80',
    },
    {
        id: 'PROD-016',
        name: 'Electric Toothbrush',
        category: 'Personal Care',
        price: 69.99,
        stock: 55,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1559656914-a30970c1affd?w=100&q=80',
    },
    {
        id: 'PROD-017',
        name: 'Gaming Mouse',
        category: 'Electronics',
        price: 59.99,
        stock: 88,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100&q=80',
    },
    {
        id: 'PROD-018',
        name: 'Essential Oil Diffuser',
        category: 'Home & Garden',
        price: 34.50,
        stock: 25,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=100&q=80',
    },
    {
        id: 'PROD-019',
        name: 'Running Shoes',
        category: 'Footwear',
        price: 119.99,
        stock: 60,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80',
    },
    {
        id: 'PROD-020',
        name: 'Digital Drawing Tablet',
        category: 'Electronics',
        price: 249.00,
        stock: 18,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?w=100&q=80',
    },
    {
        id: 'PROD-021',
        name: 'Bamboo Cutting Board',
        category: 'Kitchen',
        price: 22.99,
        stock: 95,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=100&q=80',
    },
    {
        id: 'PROD-022',
        name: 'Sunglasses',
        category: 'Accessories',
        price: 159.00,
        stock: 40,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=100&q=80',
    },
    {
        id: 'PROD-025',
        name: 'Wireless Earbuds',
        category: 'Electronics',
        price: 89.99,
        stock: 120,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=100&q=80',
    }
]

export const getProducts = createServerFn({ method: "GET" })
    .inputValidator(
        z.object({
            page: z.number().default(0),
            pageSize: z.number().default(10),
            sortBy: z.string().optional(),
            sortOrder: z.enum(["asc", "desc"]).optional(),
            filters: z
                .object({
                    name: z.string().optional(),
                    category: z.string().optional(),
                    status: z.string().optional(),
                })
                .optional(),
        })
    )
    .handler(async ({ data }: { data: ProductQueryParams }) => {
        const { page, pageSize, sortBy, sortOrder, filters } = data;

        // Apply filters
        let filteredProducts = [...products];

        if (filters) {
            if (filters.name) {
                filteredProducts = filteredProducts.filter((product) =>
                    product.name.toLowerCase().includes(filters.name!.toLowerCase())
                );
            }

            if (filters.category) {
                filteredProducts = filteredProducts.filter(
                    (product) =>
                        product.category.toLowerCase() === filters.category!.toLowerCase()
                );
            }

            if (filters.status) {
                filteredProducts = filteredProducts.filter(
                    (product) => product.status === filters.status
                );
            }
        }

        // Apply sorting
        if (sortBy) {
            filteredProducts.sort((a, b) => {
                const aValue = a[sortBy as keyof Product];
                const bValue = b[sortBy as keyof Product];

                if (typeof aValue === "string" && typeof bValue === "string") {
                    return sortOrder === "desc"
                        ? bValue.localeCompare(aValue)
                        : aValue.localeCompare(bValue);
                }

                if (typeof aValue === "number" && typeof bValue === "number") {
                    return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
                }

                return 0;
            });
        }

        // Calculate pagination
        const totalCount = filteredProducts.length;
        const totalPages = Math.ceil(totalCount / pageSize);
        const paginatedProducts = filteredProducts.slice(
            page * pageSize,
            (page + 1) * pageSize
        );

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return {
            products: paginatedProducts,
            pagination: {
                page,
                pageSize,
                totalCount,
                totalPages,
            },
        };
    });
