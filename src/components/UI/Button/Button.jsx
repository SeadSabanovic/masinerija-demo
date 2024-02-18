import "./button.scss";

export default function Button({
  label = "Enter Label",
  variant = "md",
  color = "primary",
  icon = null,
  disabled = false,
}) {
  const getButtonClasses = () => {
    let classes = "button ";

    if (variant === "fab") {
      color = null;
    }

    if (variant === "md")
      // Button Variants
      classes += "button--md ";
    if (variant === "lg") classes += "button--lg ";
    if (variant === "fab") classes += "button--fab ";
    if (variant === "icon") classes += "button--icon ";
    if (variant === "text") classes += "button--text ";
    // Button Colors
    if (color === "primary") classes += "button--primary ";
    if (color === "warn") classes += "button--warn ";
    if (color === "success") classes += "button--success ";

    return classes;
  };

  return (
    <button className={getButtonClasses()} disabled={disabled}>
      <div className="button__inner">
        {icon && icon}
        {label && variant !== "fab" && variant !== "icon" ? label : ""}
      </div>
    </button>
  );
}
