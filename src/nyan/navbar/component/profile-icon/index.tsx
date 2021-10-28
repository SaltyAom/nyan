import type { ProfileIconComponent } from './types'

const size = 'w-[48px] h-[48px]'

const ProfileIcon: ProfileIconComponent = ({
    src,
    className = '',
    ...props
}) => {
    return (
        <button
            className={`${size} bg-gray-100 rounded-full overflow-hidden ${className}`}
            type="button"
            {...props}
        >
            <img src={src} alt="Profile" className={`${size} object-cover`} />
        </button>
    )
}

export default ProfileIcon
