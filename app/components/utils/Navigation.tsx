"use client";

import NavigationLink from "@/app/components/utils/NavigationLink";
import type { NavigationItem } from "@/app/types/navigation";

const navigationItems: NavigationItem[] = [
	{ href: "/", label: "Inicio" },
	{ href: "/about", label: "Acerca de" },
	{ href: "/blog", label: "Blog" },
];

function Navigation() {
	return (
		<nav aria-label="Navegación principal" className="flex items-center gap-2">
			{navigationItems.map((item) => (
				<NavigationLink key={item.href} {...item} />
			))}
		</nav>
	);
}

export default Navigation;
