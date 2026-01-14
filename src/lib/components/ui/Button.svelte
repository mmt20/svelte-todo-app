<script lang="ts">
  import type { Snippet } from "svelte";

  // Button Variants
  type ButtonVariant = "default" | "outline" | "ghost" | "destructive" | "secondary" | "link" | "success" | "cancel";

  // Button Sizes
  type ButtonSize = "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";

  // Button Rounded
  type ButtonRounded = "" | "rounded-full" | "rounded-lg" | "rounded-md" | "rounded-xl" | "rounded-sm";

  let {
    onclick,
    variant = "default",
    size = "default",
    rounded = "",
    type = "button",
    disabled = false,
    class: className = "",
    children,
    ...restProps
  }: {
    onclick?: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    class?: string;
    children: Snippet;
    [key: string]: any;
  } = $props();
</script>

<button class="btn {variant} {size} {rounded} {className}" {type} {disabled} {onclick} {...restProps}>
  {@render children()}
</button>

<style lang="scss">
  @use "sass:map";

  // ================= VARIANT MAP =================
  $button-variants: (
    default: (
      bg: var(--accent-primary),
      color: var(--text-white),
      hover-bg: var(--accent-hover),
      hover-color: var(--text-white),
    ),
    outline: (
      bg: transparent,
      color: var(--accent-primary),
      border: 2px solid var(--accent-primary),
      hover-bg: var(--accent-hover),
      hover-color: var(--text-white),
    ),
    ghost: (
      bg: transparent,
      color: var(--accent-primary),
      hover-bg: var(--info-bg),
    ),
    destructive: (
      bg: var(--danger-primary),
      color: var(--text-white),
      hover-bg: var(--danger-bg),
      hover-color: var(--danger-primary),
    ),
    success: (
      bg: var(--success-bg),
      color: var(--text-white),
      hover-bg: var(--success-primary),
    ),
    cancel: (
      bg: transparent,
      color: var(--danger-primary),
      hover-bg: var(--danger-bg),
    ),
    secondary: (
      bg: var(--neutral-primary),
      color: var(--text-white),
      hover-bg: var(--neutral-bg),
      hover-color: var(--neutral-primary),
    ),
    link: (
      bg: none,
      color: var(--accent-primary),
      hover-decoration: underline,
    ),
  );

  // ================= SIZE MAP =================
  $button-sizes: (
    default: (
      height: 40px,
      padding: 10px 14px,
      font-size: 16px,
    ),
    sm: (
      height: 32px,
      padding: 8px 12px,
      font-size: 14px,
    ),
    lg: (
      height: 48px,
      padding: 12px 20px,
      font-size: 18px,
    ),
    icon: (
      width: 40px,
      height: 40px,
      padding: 8px,
      border-radius: 50%,
    ),
    icon-sm: (
      width: 32px,
      height: 32px,
      padding: 6px,
      border-radius: 50%,
    ),
    icon-lg: (
      width: 56px,
      height: 56px,
      padding: 0,
      border-radius: 50%,
    ),
  );

  // ================= ROUNDED MAP =================
  $button-rounded: (
    "": null,
    "rounded-full": 50%,
    "rounded-lg": 12px,
    "rounded-md": 6px,
    "rounded-xl": 20px,
    "rounded-sm": 4px,
  );

  // ================= BUTTON BASE =================
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px var(--accent-shadow);
    }
  }

  // ================= GENERATE VARIANTS =================
  @each $variant, $props in $button-variants {
    .btn.#{$variant} {
      @if map.has-key($props, bg) {
        background-color: map.get($props, bg);
      }
      @if map.has-key($props, color) {
        color: map.get($props, color);
      }
      @if map.has-key($props, border) {
        border: map.get($props, border);
      }
      @if map.has-key($props, hover-bg) or map.has-key($props, hover-color) or map.has-key($props, hover-decoration) {
        &:hover:not(:disabled),
        &:focus:not(:disabled) {
          @if map.has-key($props, hover-bg) {
            background-color: map.get($props, hover-bg);
          }
          @if map.has-key($props, hover-color) {
            color: map.get($props, hover-color);
          }
          @if map.has-key($props, hover-decoration) {
            text-decoration: map.get($props, hover-decoration);
          }
        }
      }
      border-radius: 6px;
    }
  }

  // ================= GENERATE SIZES =================
  @each $size, $props in $button-sizes {
    .btn.#{$size} {
      @if map.has-key($props, height) {
        height: map.get($props, height);
      }
      @if map.has-key($props, width) {
        width: map.get($props, width);
        min-width: map.get($props, width);
        min-height: map.get($props, height);
      }
      @if map.has-key($props, padding) {
        padding: map.get($props, padding);
      }
      @if map.has-key($props, font-size) {
        font-size: map.get($props, font-size);
      }
      @if map.has-key($props, border-radius) {
        border-radius: map.get($props, border-radius);
      }
    }
  }

  // ================= GENERATE ROUNDED =================
  @each $name, $radius in $button-rounded {
    @if $radius != null {
      .#{$name} {
        border-radius: $radius !important;
      }
    }
  }

  // ================= RESPONSIVE EXAMPLES =================
  @media (max-width: 768px) {
    @each $size, $props in $button-sizes {
      .btn.#{$size} {
        @if map.has-key($props, font-size) {
          font-size: calc(map.get($props, font-size) - 1px);
        }
      }
    }
  }

  @media (max-width: 480px) {
    .btn {
      font-size: 14px;
    }
  }
</style>
