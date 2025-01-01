import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

interface SidebarProps {
  show: boolean;
  onClose: () => void;
  cartItems: { name: string; price: number; quantity: number }[];
  removeItem: (name: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ show, onClose, cartItems, removeItem }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [show, onClose]);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          show ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar Content */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-[368px] h-full bg-white shadow-lg p-6 transition-transform duration-300 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={onClose} className="text-2xl text-gray-700">
            &times;
          </button>
        </div>

        {/* Sidebar Title */}
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4"
              >
                {/* Item Info */}
                <div className="flex items-center space-x-4">
                 
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.quantity} x Rs. {item.price.toLocaleString()}
                    </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.name)}
                  className="text-black-600 text-lg"
                >
                  <FaTimes />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Subtotal */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold flex justify-between">
            Subtotal: <span>Rs. {subtotal.toLocaleString()}</span>
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-4">
          <button
            onClick={() => window.location.href = "/checkout"}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            Checkout
          </button>
          <button
            onClick={() => window.location.href = "/productComparison"}
            className="w-full py-3 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700"
          >
            Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
