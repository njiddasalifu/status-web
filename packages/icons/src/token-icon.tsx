import { createIcon } from '../lib/create-icon'

const SvgTokenIcon = createIcon(props => {
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
        d="M3.1 10a6.9 6.9 0 1 1 13.8 0 6.9 6.9 0 0 1-13.8 0ZM10 1.9a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2Zm1.409 4.326a3.28 3.28 0 0 0-.81-.269V5H9.4v.957a3.297 3.297 0 0 0-.355.09c-.783.244-1.455.777-1.925 1.493A4.492 4.492 0 0 0 6.4 10c0 .881.25 1.746.72 2.46.47.716 1.142 1.249 1.925 1.493.118.037.237.067.356.09V15h1.2v-.957c.277-.053.548-.143.809-.27.742-.358 1.343-.982 1.727-1.757l-1.076-.532c-.277.56-.695.978-1.173 1.21a2.007 2.007 0 0 1-1.485.114c-.492-.154-.947-.5-1.28-1.007A3.293 3.293 0 0 1 7.6 10c0-.66.187-1.293.521-1.8.334-.508.789-.854 1.281-1.008a2.002 2.002 0 0 1 1.485.115c.478.23.896.649 1.173 1.21l1.076-.533c-.383-.774-.985-1.4-1.727-1.758Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgTokenIcon
