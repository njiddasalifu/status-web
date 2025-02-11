import { createIcon } from '../lib/create-icon'

const SvgMessagesIcon = createIcon(props => {
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
        fillRule="evenodd"
        d="M7.8 2.4h-.026c-.818 0-1.469 0-1.993.043-.538.044-.996.136-1.415.35a3.6 3.6 0 0 0-1.574 1.573c-.213.42-.305.877-.35 1.415C2.4 6.306 2.4 6.956 2.4 7.774V9.1h11.85a3.35 3.35 0 1 0 0-6.7H7.8ZM4.91 3.862c.223-.114.505-.185.968-.223C6.348 3.6 6.95 3.6 7.8 3.6h6.45a2.15 2.15 0 0 1 0 4.3H3.6v-.1c0-.85 0-1.451.039-1.922.038-.463.11-.745.222-.968a2.4 2.4 0 0 1 1.05-1.048ZM12.2 10.9h.026c.818 0 1.468 0 1.993.043.538.044.996.136 1.415.35a3.6 3.6 0 0 1 1.573 1.573c.214.42.306.877.35 1.415.043.524.043 1.175.043 1.993V17.6H5.75a3.35 3.35 0 1 1 0-6.7h6.45Zm2.89 1.462c-.223-.114-.505-.185-.969-.223-.47-.038-1.071-.039-1.921-.039H5.75a2.15 2.15 0 0 0 0 4.3H16.4v-.1c0-.85 0-1.451-.039-1.921-.038-.464-.11-.746-.223-.969a2.4 2.4 0 0 0-1.049-1.048Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgMessagesIcon
