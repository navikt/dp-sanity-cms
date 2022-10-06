import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, Dialog, Grid, Inline } from "@sanity/ui";
import * as NavIcons from "@navikt/ds-icons";
import { FormField, PatchEvent, set, unset } from "sanity/form";
import { useId } from "@reach/auto-id";

// @ts-ignore
import styles from "./NavIconEditor.module.css";

export const NavIconEditor = React.forwardRef<HTMLButtonElement>((props, ref) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const {
    type, // Schema information
    value, // Current field value
    markers, // Markers including validation rules
    presence, // Presence information for collaborative avatars
    onChange, // Method to handle patch events
  }: any = props;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const inputId = useId();
  const [iconSelectorOpen, setIconSelectorOpen] = useState(false);

  const handleChange = React.useCallback(
    (value) => {
      // if the value exists, set the data, if not, unset the data
      onChange(PatchEvent.from(value ? set(value) : unset()));
      setIconSelectorOpen(false);
    },
    [onChange]
  );

  return (
    <>
      <FormField
        description={type.description}
        title={type.title}
        __unstable_markers={markers} // Handles all markers including validation
        __unstable_presence={presence} // Handles presence avatars
        inputId={inputId} // Allows the label to connect to the input field
      >
        {value && (
          <div className={styles.currentIcon}>
            {/* @ts-ignore*/}
            <IconRender icon={NavIcons[value]} />
          </div>
        )}

        <Inline space={[2, 2, 3]}>
          <Button
            ref={ref}
            id={inputId}
            fontSize={2}
            mode="ghost"
            padding={[2, 2, 3]}
            text={value ? "Endre ikon" : "Legg til ikon"}
            onClick={() => setIconSelectorOpen(!iconSelectorOpen)}
          />

          {value && (
            <Button
              ref={ref}
              id={inputId}
              fontSize={2}
              mode="ghost"
              padding={[2, 2, 3]}
              text={"Fjern ikon"}
              onClick={() => onChange(PatchEvent.from(unset()))}
            />
          )}
        </Inline>

        {iconSelectorOpen && (
          <NavIconSelector onChange={handleChange} toggleDialog={setIconSelectorOpen} dialogOpen={iconSelectorOpen} />
        )}
      </FormField>
    </>
  );
});

interface Props {
  dialogOpen: boolean;
  onChange: (value: string) => void;
  toggleDialog: Dispatch<SetStateAction<boolean>>;
}

function NavIconSelector(props: Props) {
  const icons = Object.values(NavIcons);
  const iconNames = Object.keys(NavIcons);

  function handleSelect(iconName: string) {
    props.onChange(iconName);
  }

  return (
    <Dialog
      id="nav-icons"
      header="Nav ikoner"
      onClose={() => props.toggleDialog(false)}
      open={props.dialogOpen}
      width={2}
    >
      <Grid columns={[2, 3]} gap={[1, 1, 2, 3]} padding={4}>
        {icons.map((icon, index) => {
          return (
            <Button
              className={styles.iconContainer}
              key={index}
              mode={"ghost"}
              textAlign={"center"}
              onClick={() => handleSelect(iconNames[index])}
            >
              <IconRender icon={icon} />
              <p>{iconNames[index]}</p>
            </Button>
          );
        })}
      </Grid>
    </Dialog>
  );
}

export function IconRender(props: { icon: unknown }) {
  const Icon = props.icon;
  // @ts-ignore
  return Icon ? <Icon /> : <div>Finner ikke icon</div>;
}
