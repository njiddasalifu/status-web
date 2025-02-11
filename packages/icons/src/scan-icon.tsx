import { createIcon } from '../lib/create-icon'

const SvgScanIcon = createIcon(props => {
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
        d="M5.972 2.169A14.839 14.839 0 0 1 8 1.944v1.202c-.694.038-1.288.102-1.8.2-.942.183-1.548.475-1.963.89-.416.417-.708 1.022-.89 1.964-.1.512-.163 1.106-.201 1.8H1.944c.04-.761.11-1.435.225-2.028.208-1.074.572-1.937 1.22-2.584.646-.646 1.509-1.011 2.583-1.22ZM12 1.944v1.202c.693.038 1.288.102 1.8.2.942.183 1.547.475 1.963.89.416.417.708 1.022.89 1.964.1.512.163 1.106.201 1.8h1.202c-.04-.761-.11-1.435-.225-2.028-.208-1.074-.573-1.937-1.22-2.584-.646-.646-1.51-1.011-2.583-1.22A14.842 14.842 0 0 0 12 1.945Zm1.8 14.71c-.512.098-1.107.162-1.8.2v1.202c.761-.04 1.435-.11 2.028-.225 1.074-.208 1.937-.573 2.584-1.22.646-.646 1.011-1.51 1.22-2.583A15.05 15.05 0 0 0 18.056 12h-1.202a13.426 13.426 0 0 1-.201 1.8c-.182.942-.474 1.547-.89 1.963-.416.416-1.021.708-1.963.89ZM3.347 13.8a13.33 13.33 0 0 1-.201-1.8H1.944c.04.761.11 1.435.225 2.028.208 1.074.572 1.937 1.22 2.584.646.646 1.509 1.011 2.583 1.22.593.114 1.266.184 2.028.224v-1.202a13.44 13.44 0 0 1-1.8-.2c-.942-.183-1.548-.475-1.963-.89-.416-.417-.708-1.022-.89-1.964ZM7 10.6h6V9.4H7v1.2Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgScanIcon
