import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { devices } from "../constants/devices"

import LaptopIcon from '@mui/icons-material/Laptop'
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

const DeviceSelection = ({ selectedDevice, onChange }) => {
  const handleDevices = (event, newDevice) => {
    if (newDevice !== null) {
      onChange(newDevice)
    }
  }

  return (
    <ToggleButtonGroup
      value={selectedDevice}
      onChange={handleDevices}
      exclusive
    >
      <ToggleButton value={devices.laptop}>
        <LaptopIcon />
      </ToggleButton>
      <ToggleButton value={devices.tablet}>
        <TabletAndroidIcon />
      </ToggleButton>
      <ToggleButton value={devices.phone}>
        <PhoneAndroidIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default DeviceSelection