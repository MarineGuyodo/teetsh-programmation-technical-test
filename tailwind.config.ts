/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      },
      listStyleImage: {
        check: "url('@/assets/check.svg')"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    "text-red-100",
    "text-red-200",
    "text-red-300",
    "text-red-400",
    "text-red-500",
    "text-red-600",
    "text-red-700",
    "text-red-800",
    "text-red-900",
    "text-blue-100",
    "text-blue-200",
    "text-blue-300",
    "text-blue-400",
    "text-blue-500",
    "text-blue-600",
    "text-blue-700",
    "text-blue-800",
    "text-blue-900",
    "text-teal-100",
    "text-teal-200",
    "text-teal-300",
    "text-teal-400",
    "text-teal-500",
    "text-teal-600",
    "text-teal-700",
    "text-teal-800",
    "text-teal-900",
    "text-lime-100",
    "text-lime-200",
    "text-lime-300",
    "text-lime-400",
    "text-lime-500",
    "text-lime-600",
    "text-lime-700",
    "text-lime-800",
    "text-lime-900",
    "text-yellow-100",
    "text-yellow-200",
    "text-yellow-300",
    "text-yellow-400",
    "text-yellow-500",
    "text-yellow-600",
    "text-yellow-700",
    "text-yellow-800",
    "text-yellow-900",
    "bg-red-100",
    "bg-red-200",
    "bg-red-300",
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
    "bg-red-800",
    "bg-red-900",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
    "bg-blue-900",
    "bg-teal-100",
    "bg-teal-200",
    "bg-teal-300",
    "bg-teal-400",
    "bg-teal-500",
    "bg-teal-600",
    "bg-teal-700",
    "bg-teal-800",
    "bg-teal-900",
    "bg-lime-100",
    "bg-lime-200",
    "bg-lime-300",
    "bg-lime-400",
    "bg-lime-500",
    "bg-lime-600",
    "bg-lime-700",
    "bg-lime-800",
    "bg-lime-900",
    "bg-yellow-100",
    "bg-yellow-200",
    "bg-yellow-300",
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-yellow-600",
    "bg-yellow-700",
    "bg-yellow-800",
    "bg-yellow-900",
    "border-red-100",
    "border-red-200",
    "border-red-300",
    "border-red-400",
    "border-red-500",
    "border-red-600",
    "border-red-700",
    "border-red-800",
    "border-red-900",
    "border-blue-100",
    "border-blue-200",
    "border-blue-300",
    "border-blue-400",
    "border-blue-500",
    "border-blue-600",
    "border-blue-700",
    "border-blue-800",
    "border-blue-900",
    "border-teal-100",
    "border-teal-200",
    "border-teal-300",
    "border-teal-400",
    "border-teal-500",
    "border-teal-600",
    "border-teal-700",
    "border-teal-800",
    "border-teal-900",
    "border-lime-100",
    "border-lime-200",
    "border-lime-300",
    "border-lime-400",
    "border-lime-500",
    "border-lime-600",
    "border-lime-700",
    "border-lime-800",
    "border-lime-900",
    "border-yellow-100",
    "border-yellow-200",
    "border-yellow-300",
    "border-yellow-400",
    "border-yellow-500",
    "border-yellow-600",
    "border-yellow-700",
    "border-yellow-800",
    "border-yellow-900"
  ]
};
