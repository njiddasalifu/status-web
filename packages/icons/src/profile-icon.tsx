import { createIcon } from '../lib/create-icon'

const SvgProfileIcon = createIcon(props => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 20 20"
      focusable={false}
      aria-hidden={true}
    >
      <g clipPath="url(#profile-icon_svg__a)">
        <path
          fill={props.color}
          fillRule="evenodd"
          d="M3.1 10a6.9 6.9 0 1 1 12.057 4.584 5.04 5.04 0 0 0-.62-.708C13.242 12.654 11.548 12.4 10 12.4s-3.243.254-4.537 1.476c-.223.21-.43.446-.62.708A6.874 6.874 0 0 1 3.1 10Zm2.626 5.417A6.87 6.87 0 0 0 10 16.9a6.87 6.87 0 0 0 4.274-1.483 3.89 3.89 0 0 0-.561-.668C12.757 13.846 11.452 13.6 10 13.6s-2.758.246-3.713 1.149a3.892 3.892 0 0 0-.561.668ZM10 1.9a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2ZM3.4 20.5c0-.17.002-.337.006-.5h13.188c.004.163.006.33.006.5v.6H3.4v-.6ZM8.1 8a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0ZM10 4.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="profile-icon_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})

export default SvgProfileIcon
