/* eslint-disable react/jsx-props-no-spreading */
import { SwitchProps } from "@radix-ui/react-switch";
import SettingsLabel from "./SettingsLabel";
import { Switch } from "../ui/Switch";

interface Props extends SwitchProps {
  label: string;
  // eslint-disable-next-line react/require-default-props
  description?: string;
}

export default function SettingsSwitch({ label, description, ...props }: Props) {
  return (
    <SettingsLabel label={label} description={description}>
      <Switch {...props} />
    </SettingsLabel>
  );
}
