import { create } from 'zustand';
import type { Lead, Attorney } from '@/types';

interface LeadFormState {
  formData: Partial<Lead>;
  currentStep: number;
  isSubmitting: boolean;
  error: string | null;
  updateFormData: (data: Partial<Lead>) => void;
  setCurrentStep: (step: number) => void;
  setIsSubmitting: (submitting: boolean) => void;
  setError: (error: string | null) => void;
  resetForm: () => void;
}

export const useLeadFormStore = create<LeadFormState>((set) => ({
  formData: {},
  currentStep: 1,
  isSubmitting: false,
  error: null,

  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  setCurrentStep: (step) => set({ currentStep: step }),
  setIsSubmitting: (submitting) => set({ isSubmitting: submitting }),
  setError: (error) => set({ error }),

  resetForm: () =>
    set({
      formData: {},
      currentStep: 1,
      isSubmitting: false,
      error: null,
    }),
}));

interface DashboardState {
  leads: Lead[];
  selectedLead: Lead | null;
  isLoading: boolean;
  filters: {
    status: string;
    practiceArea: string;
    sortBy: 'newest' | 'highest-value' | 'best-fit';
  };
  setLeads: (leads: Lead[]) => void;
  setSelectedLead: (lead: Lead | null) => void;
  setIsLoading: (loading: boolean) => void;
  updateFilter: (key: string, value: string) => void;
  addLead: (lead: Lead) => void;
  updateLead: (id: string, updates: Partial<Lead>) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  leads: [],
  selectedLead: null,
  isLoading: true,
  filters: {
    status: 'all',
    practiceArea: 'all',
    sortBy: 'newest',
  },

  setLeads: (leads) => set({ leads, isLoading: false }),
  setSelectedLead: (lead) => set({ selectedLead: lead }),
  setIsLoading: (loading) => set({ isLoading: loading }),

  updateFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),

  addLead: (lead) =>
    set((state) => ({
      leads: [lead, ...state.leads],
    })),

  updateLead: (id, updates) =>
    set((state) => ({
      leads: state.leads.map((lead) =>
        lead.id === id ? { ...lead, ...updates } : lead
      ),
      selectedLead:
        state.selectedLead?.id === id
          ? { ...state.selectedLead, ...updates }
          : state.selectedLead,
    })),
}));

interface AuthState {
  attorney: Attorney | null;
  isAuthenticated: boolean;
  setAttorney: (attorney: Attorney) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  attorney: null,
  isAuthenticated: false,

  setAttorney: (attorney) =>
    set({
      attorney,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      attorney: null,
      isAuthenticated: false,
    }),
}));
