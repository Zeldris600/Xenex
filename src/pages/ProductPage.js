import React from "react";

const ProductPage = () => {
  return (
    <div>
      <div class="mx-auto mt-8 max-w-lg px-4 py-2 pt-12 pb-8 text-xs sm:ml-auto sm:text-base">
        <div class="relative">
          <ul class="relative flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <li class="flex items-center space-x-3 text-left sm:space-x-4">
              <a
                class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </a>
              <span class="font-semibold text-gray-900">Shop</span>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="hidden h-4 w-4 text-gray-400 sm:block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <li class="flex items-center space-x-3 text-left sm:space-x-4">
              <a
                class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                href="#"
              >
                2
              </a>
              <span class="font-semibold text-gray-900">Shipping</span>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="hidden h-4 w-4 text-gray-400 sm:block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <li class="flex items-center space-x-3 text-left sm:space-x-4">
              <a
                class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                href="#"
              >
                3
              </a>
              <span class="font-semibold text-gray-500">Payment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
