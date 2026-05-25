import type { Copy } from "../types/portfolio";

type Props = {
  footer: Copy["footer"];
};

export function Footer({ footer }: Props) {
  return <footer className="site-footer">{footer}</footer>;
}
