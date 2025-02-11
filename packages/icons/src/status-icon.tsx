import { createIcon } from '../lib/create-icon'

const SvgStatusIcon = createIcon(props => {
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
      <path
        fill={props.color}
        d="M10.079 9.74c.7.07 1.402.142 2.264.095 2.337-.127 3.753-1.3 3.652-3.05-.102-1.783-1.985-2.881-3.87-2.778-3.07.167-5.328 2.8-5.582 5.812a7.636 7.636 0 0 1 1.27-.175c.862-.047 1.564.024 2.266.095Zm-6.074 3.654c.098 1.668 1.902 2.696 3.707 2.6 2.941-.157 5.104-2.622 5.347-5.44a7.48 7.48 0 0 1-1.216.164c-.826.044-1.498-.023-2.17-.09-.672-.066-1.344-.133-2.17-.089-2.238.12-3.595 1.216-3.498 2.855Z"
      />
    </svg>
  )
})

export default SvgStatusIcon
