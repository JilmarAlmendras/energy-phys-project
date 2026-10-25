import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Activity,
  BookOpen,
  Calendar,
  CreditCard,
  Home,
  MessageSquare,
  Settings,
  UserCog,
  Users,
} from "lucide-react";

const principalItems = [
  {
    title: "Inicio",
    url: "/",
    icon: Home,
  },
  {
    title: "Clientes",
    url: "/clientes",
    icon: Users,
    badge: "4",
  },
  {
    title: "Empleados",
    url: "/empleados",
    icon: UserCog,
  },
  {
    title: "Citas",
    url: "/citas",
    icon: Calendar,
  },
];

const recursosItems = [
  {
    title: "Biblioteca",
    url: "/biblioteca",
    icon: BookOpen,
  },
  {
    title: "Chatbot",
    url: "/chatbot",
    icon: MessageSquare,
  },
];

const finanzasItems = [
  {
    title: "Pagos",
    url: "/pagos",
    icon: CreditCard,
    badge: "2 pte",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-[#eceef1] bg-white" collapsible="offcanvas">
      <SidebarHeader className="border-b border-[#eceef1] px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#285878] text-white">
            <Activity className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-tight tracking-tight text-[#0c1420]">
              Fisiocenter
            </span>
            <span className="text-[10px] text-[#94a3b8]">
              Panel administrativo
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="px-2 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
            Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {principalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="h-8 rounded-md px-2 text-sm text-[#475569] transition-colors hover:bg-[#f1f4f7] hover:text-[#0c1420] data-[active=true]:bg-[#eef4fb] data-[active=true]:text-[#285878]"
                  >
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-[#94a3b8]" />
                      <span className="flex-1">{item.title}</span>
                      {item.badge && (
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f1f4f7] px-1.5 text-[10px] font-medium text-[#64748b]">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="px-2 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
            Recursos
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recursosItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="h-8 rounded-md px-2 text-sm text-[#475569] transition-colors hover:bg-[#f1f4f7] hover:text-[#0c1420] data-[active=true]:bg-[#eef4fb] data-[active=true]:text-[#285878]"
                  >
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-[#94a3b8]" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="px-2 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
            Finanzas
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {finanzasItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="h-8 rounded-md px-2 text-sm text-[#475569] transition-colors hover:bg-[#f1f4f7] hover:text-[#0c1420] data-[active=true]:bg-[#eef4fb] data-[active=true]:text-[#285878]"
                  >
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-[#94a3b8]" />
                      <span className="flex-1">{item.title}</span>
                      {item.badge && (
                        <span className="flex h-5 items-center justify-center rounded-full bg-[#fef3c7] px-1.5 text-[10px] font-medium text-[#d97706]">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-[#eceef1] px-2 py-2">
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#285878] text-[10px] font-semibold text-white">
            AT
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-xs font-medium text-[#0c1420]">Ana Torres</span>
            <span className="text-[10px] text-[#94a3b8]">Administradora</span>
          </div>
          <button className="rounded-md p-1 text-[#94a3b8] hover:bg-[#f1f4f7] hover:text-[#475569]">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
