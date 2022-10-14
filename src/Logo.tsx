import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={106}
      height={94}
      viewBox="0 0 106 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M105.312 47.01c0-6.976-8.737-13.587-22.131-17.687C86.27 15.67 84.898 4.809 78.844 1.33 77.45.515 75.819.13 74.036.13v4.787c.987 0 1.782.193 2.447.558 2.92 1.674 4.186 8.05 3.199 16.25-.237 2.018-.623 4.143-1.095 6.31-4.208-1.03-8.801-1.824-13.631-2.339-2.898-3.971-5.903-7.578-8.93-10.733C63.024 8.458 69.593 4.895 74.058 4.895V.108c-5.904 0-13.631 4.207-21.445 11.505C44.8 4.358 37.072.193 31.17.193V4.98c4.443 0 11.033 3.542 18.031 10.003a101.383 101.383 0 00-8.866 10.712c-4.85.515-9.445 1.31-13.652 2.361a64.738 64.738 0 01-1.116-6.225c-1.009-8.2.236-14.575 3.134-16.271.644-.386 1.481-.558 2.469-.558V.215c-1.804 0-3.435.386-4.852 1.202-6.032 3.478-7.384 14.318-4.271 27.927C8.694 33.466 0 40.056 0 47.011c0 6.976 8.737 13.588 22.131 17.688-3.09 13.652-1.717 24.514 4.337 27.991 1.395.816 3.026 1.202 4.83 1.202 5.902 0 13.63-4.207 21.444-11.505 7.814 7.255 15.541 11.42 21.444 11.42 1.803 0 3.435-.387 4.852-1.203 6.032-3.477 7.384-14.317 4.271-27.927 13.31-4.1 22.003-10.711 22.003-17.666zM77.363 32.694c-.794 2.769-1.781 5.624-2.898 8.479a101.54 101.54 0 00-2.812-5.152 116.225 116.225 0 00-3.09-5.023 96.865 96.865 0 018.8 1.696zm-9.831 22.861c-1.674 2.898-3.392 5.646-5.173 8.2-3.199.28-6.44.43-9.703.43-3.241 0-6.483-.15-9.66-.408a118.299 118.299 0 01-5.194-8.157 111.8 111.8 0 01-4.465-8.544 111.942 111.942 0 014.443-8.565c1.674-2.898 3.392-5.645 5.173-8.2 3.199-.279 6.44-.43 9.703-.43 3.241 0 6.483.151 9.66.409 1.781 2.554 3.52 5.28 5.194 8.157a111.8 111.8 0 014.465 8.543 120.207 120.207 0 01-4.443 8.565zm6.933-2.79a91.976 91.976 0 012.963 8.543 96.309 96.309 0 01-8.844 1.717 118.46 118.46 0 003.09-5.087c.988-1.717 1.911-3.456 2.791-5.173zM52.7 75.668a88.508 88.508 0 01-5.968-6.87c1.932.087 3.907.15 5.904.15 2.017 0 4.014-.042 5.967-.15a83.791 83.791 0 01-5.903 6.87zm-15.97-12.644a96.84 96.84 0 01-8.802-1.696c.794-2.769 1.782-5.624 2.898-8.479.88 1.718 1.803 3.435 2.812 5.152a142.035 142.035 0 003.091 5.023zm15.863-44.67a88.486 88.486 0 015.967 6.869c-1.932-.086-3.907-.15-5.903-.15-2.018 0-4.014.043-5.968.15a83.771 83.771 0 015.904-6.87zM36.707 30.997a118.566 118.566 0 00-5.882 10.24 92.005 92.005 0 01-2.962-8.544 104.28 104.28 0 018.844-1.696zM17.28 57.873C9.681 54.63 4.765 50.38 4.765 47.01s4.916-7.642 12.515-10.862c1.846-.794 3.864-1.503 5.946-2.168 1.224 4.207 2.834 8.586 4.83 13.073-1.975 4.465-3.563 8.822-4.765 13.008a65.197 65.197 0 01-6.01-2.19zM28.83 88.547c-2.92-1.674-4.186-8.05-3.199-16.25.236-2.017.623-4.142 1.095-6.31 4.207 1.03 8.801 1.824 13.631 2.34 2.898 3.97 5.903 7.577 8.93 10.732-6.998 6.505-13.567 10.068-18.032 10.068-.966-.021-1.781-.215-2.425-.58zM79.746 72.19c1.009 8.2-.236 14.576-3.134 16.272-.644.386-1.481.558-2.469.558-4.443 0-11.033-3.542-18.031-10.004 3.005-3.155 6.01-6.74 8.866-10.711 4.85-.515 9.445-1.31 13.652-2.361.494 2.168.88 4.25 1.116 6.246zm8.264-14.317c-1.846.794-3.863 1.502-5.946 2.168-1.223-4.208-2.833-8.587-4.83-13.073 1.975-4.465 3.564-8.823 4.766-13.009a68.083 68.083 0 016.032 2.19c7.599 3.241 12.515 7.492 12.515 10.862-.022 3.37-4.938 7.642-12.537 10.861z"
        fill="#81D8F7"
      />
      <path
        d="M52.635 56.82c5.418 0 9.81-4.391 9.81-9.81 0-5.417-4.392-9.81-9.81-9.81s-9.81 4.393-9.81 9.81c0 5.419 4.392 9.81 9.81 9.81z"
        fill="#81D8F7"
      />
    </svg>
  )
}
