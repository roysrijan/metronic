<template>
  <!--begin::Menu wrapper-->
  <div
    class="header-menu align-items-stretch"
    data-kt-drawer="true"
    data-kt-drawer-name="header-menu"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
    data-kt-place="true"
    data-kt-place-mode="prepend"
    data-kt-place-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
  >
    <!--begin::Menu-->
    <div
      class="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch"
      id="#kt_header_menu"
      data-kt-menu="true"
    >
      <div class="menu-item me-lg-1">
        <router-link
          to="/dashboard"
          v-slot="{ href, navigate, isActive, isExactActive }"
        >
          <a
            :href="href"
            class="menu-link py-3"
            @click="navigate"
            :class="[isActive && 'active', isExactActive && 'active']"
          >
            <span class="menu-title">Dashboard</span>
          </a>
        </router-link>
      </div>

      <div class="menu-item me-lg-1">
        <router-link
          to="/builder"
          v-slot="{ href, navigate, isActive, isExactActive }"
        >
          <a
            :href="href"
            class="menu-link py-3"
            @click="navigate"
            :class="[isActive && 'active', isExactActive && 'active']"
          >
            <span class="menu-title">Builder</span>
          </a>
        </router-link>
      </div>

      <div
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-start"
        class="menu-item menu-lg-down-accordion me-lg-1"
      >
        <span
          class="menu-link py-3"
          :class="{ active: hasActiveChildren('/crafted') }"
        >
          <span class="menu-title">Crafted</span>
          <span class="menu-arrow d-lg-none"></span>
        </span>
        <div
          class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
        >
          <div
            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
            data-kt-menu-placement="right-start"
            class="menu-item menu-lg-down-accordion"
          >
            <span
              class="menu-link py-3"
              :class="{ active: hasActiveChildren('/pages') }"
            >
              <span class="menu-icon">
                <span class="svg-icon svg-icon-2">
                  <inline-svg src="media/icons/duotone/Code/Compiling.svg" />
                </span>
              </span>
              <span class="menu-title">Pages</span>
              <span class="menu-arrow"></span>
            </span>
            <div
              class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px"
            >
              <div
                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
                class="menu-item menu-lg-down-accordion"
              >
                <span
                  class="menu-link py-3"
                  :class="{ active: hasActiveChildren('/profile') }"
                >
                  <span class="menu-bullet">
                    <span class="bullet bullet-dot"></span>
                  </span>
                  <span class="menu-title">Profile</span>
                  <span class="menu-arrow"></span>
                </span>
                <div
                  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px"
                >
                  <div class="menu-item">
                    <router-link
                      class="menu-link py-3"
                      active-class="active"
                      to="/crafted/pages/profile/overview"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">Overview</span>
                    </router-link>
                  </div>
                  <div class="menu-item">
                    <router-link
                      class="menu-link py-3"
                      active-class="active"
                      to="/crafted/pages/profile/projects"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">Projects</span>
                    </router-link>
                  </div>
                  <div class="menu-item">
                    <router-link
                      class="menu-link py-3"
                      active-class="active"
                      to="/crafted/pages/profile/campaigns"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">Campaigns</span>
                    </router-link>
                  </div>
                  <div class="menu-item">
                    <router-link
                      class="menu-link py-3"
                      active-class="active"
                      to="/crafted/pages/profile/documents"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">Documents</span>
                    </router-link>
                  </div>
                  <div class="menu-item">
                    <router-link
                      class="menu-link py-3"
                      active-class="active"
                      to="/crafted/pages/profile/connections"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">Connections</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
            data-kt-menu-placement="right-start"
            class="menu-item menu-lg-down-accordion"
          >
            <span
              class="menu-link py-3"
              :class="{ active: hasActiveChildren('/account') }"
            >
              <span class="menu-icon">
                <span class="svg-icon svg-icon-2">
                  <inline-svg src="media/icons/duotone/General/User.svg" />
                </span>
              </span>
              <span class="menu-title">Account</span>
              <span class="menu-arrow"></span>
            </span>
            <div
              class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px"
            >
              <div class="menu-item">
                <router-link
                  class="menu-link py-3"
                  to="/crafted/account/overview"
                  active-class="active"
                >
                  <span class="menu-bullet">
                    <span class="bullet bullet-dot"></span>
                  </span>
                  <span class="menu-title">Overview</span>
                </router-link>
              </div>
              <div class="menu-item">
                <router-link
                  class="menu-link py-3"
                  to="/crafted/account/settings"
                  active-class="active"
                >
                  <span class="menu-bullet">
                    <span class="bullet bullet-dot"></span>
                  </span>
                  <span class="menu-title">Settings</span>
                </router-link>
              </div>
            </div>
          </div>
          <div
            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
            data-kt-menu-placement="right-start"
            class="menu-item menu-lg-down-accordion"
          >
            <span class="menu-link py-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-2">
                  <inline-svg src="media/icons/duotone/Interface/Lock.svg" />
                </span>
              </span>
              <span class="menu-title">Authentication</span>
              <span class="menu-arrow"></span>
            </span>
            <div
              class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px"
            >
              <div
                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
                class="menu-item menu-lg-down-accordion"
              >
                <span class="menu-link py-3">
                  <span class="menu-bullet">
                    <span class="bullet bullet-dot"></span>
                  </span>
                  <span class="menu-title">Basic Flow</span>
                  <span class="menu-arrow"></span>
                </span>
                <div
                  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px"
                >
                  <div class="menu-item">
                    <router-link class="menu-link py-3" to="/sign-in">
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">Sign-in</span>
                    </router-link>
                  </div>
                  <div class="menu-item">
                    <router-link class="menu-link py-3" to="/sign-up">
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">Sign-up</span>
                    </router-link>
                  </div>
                  <div class="menu-item">
                    <router-link class="menu-link py-3" to="/password-reset">
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">Password Reset</span>
                    </router-link>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  class="menu-item menu-lg-down-accordion"
                >
                  <span class="menu-link py-3">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Extended</span>
                    <span class="menu-arrow"></span>
                  </span>
                  <div
                    class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px"
                  >
                    <div class="menu-item">
                      <router-link class="menu-link py-3" to="/404">
                        <span class="menu-bullet">
                          <span class="bullet bullet-dot"></span>
                        </span>
                        <span class="menu-title">Error 404</span>
                      </router-link>
                    </div>
                    <div class="menu-item">
                      <router-link class="menu-link py-3" to="/500">
                        <span class="menu-bullet">
                          <span class="bullet bullet-dot"></span>
                        </span>
                        <span class="menu-title">Error 500</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-start"
        class="menu-item menu-lg-down-accordion me-lg-1"
      >
        <span class="menu-link py-3">
          <span class="menu-title">Mega Menu</span>
          <span class="menu-arrow d-lg-none"></span>
        </span>
        <div
          class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown w-100 w-lg-600px p-5 p-lg-5"
          style=""
        >
          <!--begin:Row-->
          <div class="row" data-kt-menu-dismiss="true">
            <!--begin:Col-->
            <div class="col-lg-4 border-left-lg-1">
              <div class="menu-inline menu-column menu-active-bg">
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
              </div>
            </div>
            <!--end:Col-->
            <!--begin:Col-->
            <div class="col-lg-4 border-left-lg-1">
              <div class="menu-inline menu-column menu-active-bg">
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
              </div>
            </div>
            <!--end:Col-->
            <!--begin:Col-->
            <div class="col-lg-4 border-left-lg-1">
              <div class="menu-inline menu-column menu-active-bg">
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Example link</span>
                  </a>
                </div>
              </div>
            </div>
            <!--end:Col-->
          </div>
          <!--end:Row-->
        </div>
      </div>
      <!--end::Menu-->
    </div>
  </div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { MenuComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "KTMenu",
  components: {},
  setup() {
    const route = useRoute();

    const hasActiveChildren = match => {
      return route.path.indexOf(match) !== -1;
    };

    onMounted(() => {
      MenuComponent.reinitialization();
    });

    return {
      hasActiveChildren
    };
  }
});
</script>
