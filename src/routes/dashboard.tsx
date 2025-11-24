import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger
} from '@/components/ui/sidebar'
import { createFileRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import {
    FacebookIcon,
    InstagramIcon,
    LanguagesIcon,
    LayoutDashboard,
    LinkedinIcon,
    Package,
    Settings,
    TwitterIcon,
    User2
} from 'lucide-react'
import React from 'react'

export const Route = createFileRoute('/dashboard')({
    component: DashboardLayout
})

function DashboardLayout() {
    const location = useLocation()
    const pathSegments = location.pathname.split('/').filter(Boolean)

    return (
        <div className='flex min-h-dvh w-full'>
            <SidebarProvider>
                <Sidebar>
                    <SidebarContent>
                        <SidebarHeader>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton size="lg" asChild>
                                        <Link to="/">
                                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                                <User2 className="size-4" />
                                            </div>
                                            <div className="grid flex-1 text-left text-sm leading-tight">
                                                <span className="truncate font-semibold">Your App</span>
                                                <span className="truncate text-xs">Dashboard</span>
                                            </div>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarHeader>

                        <SidebarGroup>
                            <SidebarGroupLabel>General</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link to='/dashboard'>
                                                <LayoutDashboard />
                                                <span>Dashboard</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link to='/dashboard/products'>
                                                <Package />
                                                <span>Products</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link to='/dashboard/settings'>
                                                <Settings />
                                                <span>Settings</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <div className='flex flex-1 flex-col'>
                    <header className='bg-card sticky top-0 z-50 border-b'>
                        <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6'>
                            <div className='flex items-center gap-4'>
                                <SidebarTrigger className='[&_svg]:h-5 [&_svg]:w-5' />
                                <Separator orientation='vertical' className='hidden h-4 sm:block' />
                                <Breadcrumb className='hidden sm:block'>
                                    <BreadcrumbList>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink asChild>
                                                <Link to='/'>Home</Link>
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        {pathSegments.map((segment, index) => {
                                            const path = `/${pathSegments.slice(0, index + 1).join('/')}`
                                            const isLast = index === pathSegments.length - 1
                                            const title = segment.charAt(0).toUpperCase() + segment.slice(1)

                                            return (
                                                <React.Fragment key={path}>
                                                    <BreadcrumbItem>
                                                        {isLast ? (
                                                            <BreadcrumbPage>{title}</BreadcrumbPage>
                                                        ) : (
                                                            <BreadcrumbLink asChild>
                                                                <Link to={path as any}>{title}</Link>
                                                            </BreadcrumbLink>
                                                        )}
                                                    </BreadcrumbItem>
                                                    {!isLast && <BreadcrumbSeparator />}
                                                </React.Fragment>
                                            )
                                        })}
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>
                            <div className='flex items-center gap-1.5'>
                                <LanguageDropdown
                                    trigger={
                                        <Button variant='ghost' size='icon'>
                                            <LanguagesIcon />
                                        </Button>
                                    }
                                />
                                <ProfileDropdown
                                    trigger={
                                        <Button variant='ghost' size='icon' className='h-10 w-10'>
                                            <Avatar className='h-10 w-10 rounded-md'>
                                                <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' />
                                            </Avatar>
                                        </Button>
                                    }
                                />
                            </div>
                        </div>
                    </header>
                    <main className='mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6'>
                        <Outlet />
                    </main>
                    <footer>
                        <div className='text-muted-foreground mx-auto flex w-full items-center justify-between gap-3 px-4 py-3 flex-col sm:flex-row sm:gap-6 sm:px-6'>
                            <p className='text-sm text-center sm:text-left'>
                                {`©${new Date().getFullYear()}`}{' '}
                                <a href='#' className='text-primary'>
                                    TanStack Start
                                </a>
                                , Made for better web design
                            </p>
                            <div className='flex items-center gap-5'>
                                <a href='#'>
                                    <FacebookIcon className='h-4 w-4' />
                                </a>
                                <a href='#'>
                                    <InstagramIcon className='h-4 w-4' />
                                </a>
                                <a href='#'>
                                    <LinkedinIcon className='h-4 w-4' />
                                </a>
                                <a href='#'>
                                    <TwitterIcon className='h-4 w-4' />
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </SidebarProvider>
        </div>
    )
}
