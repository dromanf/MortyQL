import React from "react";
import Link, { LinkProps } from "next/link";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Omit } from "@/modules/shared/SharedTypes";

const useStyles = makeStyles((theme) => ({
  anchor: {
    textDecoration: "none",
  },
}));

export type NextLinkProps = React.PropsWithChildren<
  Omit<LinkProps, "passHref">
> & {
  className?: string;
};

const NextLink = React.forwardRef<HTMLAnchorElement, NextLinkProps>(
  (
    {
      children,
      href,
      prefetch,
      replace,
      scroll,
      shallow,
      // Para pasar cualquier otro accesorio como "className", etc. En el href.
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles();

    return (
      <Link
        // Si se pasa cualquier otro accesorio al siguiente / enlace,
         // da una advertencia propType.
        {...{ href, prefetch, replace, scroll, shallow }}
        passHref={true}
      >
        <a
          ref={ref}
          className={clsx(
            classes.anchor,
            // Material UI passes classes sometimes.
            // So, we need "className" prop here.
            className,
          )}
          {...rest}
        >
          {children}
        </a>
      </Link>
    );
  },
);

export default NextLink;
