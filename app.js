/**
 * LalaOps — Centralized Operations Task Tracker
 * Interactive Application Logic & State Engine
 * Built for Lala Tech LLC Product Resource & MVP
 * 
 * Workflow Lifecycle:
 * New Request → Needs Clarification → Ready to Assign → In Progress → Waiting on Client → Done
 */

(function () {
  'use strict';

  // --- Initial Seed Data (Operational Tasks reflecting new 6-stage lifecycle) ---
  const DEFAULT_TASKS = [
    {
      id: 'OPS-4091',
      title: 'Inbound Freight Quote Request — South Terminal Expansion',
      description: 'Customer requested multi-modal quote for 14 flatbed containers. Initial volume parameters missing.',
      assignee: 'Unassigned',
      assigneeAvatar: '',
      priority: 'P1',
      status: 'new_request',
      source: 'whatsapp',
      sourceDetail: '+1 (555) 012-9900 • Dispatch Inbound Group',
      dueDate: new Date(Date.now() + 18 * 3600 * 1000).toISOString(),
      clientWaitReason: '',
      clarificationNote: '',
      category: 'Logistics',
      createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString()
    },
    {
      id: 'OPS-4092',
      title: 'EuroCargo Port Release #882 & Bill of Lading clearance',
      description: 'Clear documentation with customs broker and verify container release authorization code.',
      assignee: 'Marcus Vance',
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJtjmbBM5EauMpQdiam_c55utQKN3oDCWqhsyrXOkeyX-OLtibY6buXIe0Eo9ieAbjRd9a-3bhbey-B17XADfZ0aVw0_vkKqIfhWeY3kbmPq6BAT28iCFeGMBRI40qKvew6cp-Af3felKsjFR2emae5zr4FbHfEAtAy1z9Ry96y2ZPxfDyKbniOhLKQw4TTYxDp67QYbFK_9zqRs2l1GybKs19ZrSLQPZ-npLIJsJARzkVWDkCzgyCEw',
      priority: 'P0',
      status: 'needs_clarification',
      source: 'whatsapp',
      sourceDetail: '+1 (555) 019-2834 • WhatsApp Dispatch',
      dueDate: new Date(Date.now() - 3 * 3600 * 1000).toISOString(), // Overdue internally!
      clientWaitReason: '',
      clarificationNote: 'Tariff code discrepancy between manifest and broker invoice. Need ops lead signoff.',
      category: 'Logistics',
      createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString()
    },
    {
      id: 'OPS-4093',
      title: 'Apex Ltd Urgent Credit Increase Request ($50,000 order)',
      description: 'Submitted revised payment terms to Apex Ltd. Awaiting formal digital signature from client CFO.',
      assignee: 'Elena Rostova',
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfxrI4ELYs_7pRqpdknJ5uhT267yVsyeJx6CUZTyoVrk2O7SkuAFo49vd95ogWObAc2WHdDUJI9YG1Cl6_Vuin0Mw8db94NdHNWk2TY1FOIRqF5o1r8SMgIHT7gxg06eJlVbaBN090RXztJ14LMr1j4FNTGnMgtX-lFWA9wwtsFcmN2C5X2uXki_49Qs8IZDGw2A52ZRqa4-nXohkAL9B-F8lNkm6UQCq2fxwUoX7e8b4mkg17szpWlA',
      priority: 'P1',
      status: 'waiting_on_client',
      source: 'email',
      sourceDetail: 'billing-intake@lala-tech.com',
      dueDate: new Date(Date.now() - 48 * 3600 * 1000).toISOString(), // Calendar date in past, but WAITING ON CLIENT (NOT stale/overdue!)
      clientWaitReason: 'Awaiting DocuSign execution by Apex Ltd Finance Director (Mr. Sterling). Followed up yesterday.',
      clientWaitDays: 2,
      clarificationNote: '',
      category: 'Legal & Billing',
      createdAt: new Date(Date.now() - 72 * 3600 * 1000).toISOString()
    },
    {
      id: 'OPS-4094',
      title: 'Customs SKU Mapping for Q3 Batch (45 cross-border items)',
      description: 'Validated specification sheet received. Ready for dispatch engineer allocation.',
      assignee: 'Unassigned',
      assigneeAvatar: '',
      priority: 'P2',
      status: 'ready_to_assign',
      source: 'spreadsheet',
      sourceDetail: 'Imported from Ops_Manifest_v2.xlsx',
      dueDate: new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
      clientWaitReason: '',
      clarificationNote: '',
      category: 'Logistics',
      createdAt: new Date(Date.now() - 14 * 3600 * 1000).toISOString()
    },
    {
      id: 'OPS-4095',
      title: 'Cold Chain Temperature Log Reconciliation #811',
      description: 'Review refrigerated transit sensors for pharma batch #440-C. Flag any variance > 2°C.',
      assignee: 'Marcus Vance',
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJtjmbBM5EauMpQdiam_c55utQKN3oDCWqhsyrXOkeyX-OLtibY6buXIe0Eo9ieAbjRd9a-3bhbey-B17XADfZ0aVw0_vkKqIfhWeY3kbmPq6BAT28iCFeGMBRI40qKvew6cp-Af3felKsjFR2emae5zr4FbHfEAtAy1z9Ry96y2ZPxfDyKbniOhLKQw4TTYxDp67QYbFK_9zqRs2l1GybKs19ZrSLQPZ-npLIJsJARzkVWDkCzgyCEw',
      priority: 'P0',
      status: 'in_progress',
      source: 'whatsapp',
      sourceDetail: '+1 (555) 014-9922 • Driver Direct Line',
      dueDate: new Date(Date.now() + 3 * 3600 * 1000).toISOString(), // Today 4:00 PM
      clientWaitReason: '',
      clarificationNote: '',
      category: 'Logistics',
      createdAt: new Date(Date.now() - 6 * 3600 * 1000).toISOString()
    },
    {
      id: 'OPS-4096',
      title: 'Hazardous Materials Transport Permit Renewal (Interstate 95)',
      description: 'Submit updated driver certifications and fleet safety inspection to regional DOT portal.',
      assignee: 'Priya Patel',
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS6SirbPX4wyuaa9Fk1jFI277snyvy2Z1ZDZ5bo4dY3680H8w2uE4dvk6a95BKG4TYUd9Bzv0XqDuL5vN35kRPi9kfV8bUE9NQUmKfHNeg8dEcM-UspMZApJx3DzEKIodjH1AtQkwwZZSLbnGltKCn4cE27_QzQgqIy1zUerWLg4aft2R9AXAF0_VT-WvAocJKcFxexQhwMQ-pGDlxsd7x1Z6eucOKV3KGjTrLMlU0dwkgu6tP6_O3nA',
      priority: 'P1',
      status: 'in_progress',
      source: 'email',
      sourceDetail: 'compliance@lala-tech.com',
      dueDate: new Date(Date.now() + 36 * 3600 * 1000).toISOString(),
      clientWaitReason: '',
      clarificationNote: '',
      category: 'Legal & Billing',
      createdAt: new Date(Date.now() - 36 * 3600 * 1000).toISOString()
    },
    {
      id: 'OPS-4097',
      title: 'Pallet Delivery Confirmation — Zenith Industrial Parts',
      description: 'Shipment delivered to client loading dock. Awaiting signed Proof of Delivery receipt from Zenith.',
      assignee: 'David Kim',
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFKP27d5VSLwirrIy5FoH-Tc0b-FJKit9bLMf6usfiTfYybIJBh3293dXl88-3ysxdu9IaGhcvlU-zd7mGPKjGd8rZIP-RkqJmTJIXD547Fn8DvDobsSOUSLilsxEI6nhuCMGf6U-s0ME_BdQqo-TjusOCJhcVLgUZYCYH7_QCecq6R7czVIXzgScdWcr0QNsVcq9nTe3RmdrH8DfrTtY3tB63BiNbOHslIiDuXp8gx_h66ggGmg78tA',
      priority: 'P2',
      status: 'waiting_on_client',
      source: 'manual',
      sourceDetail: 'Dock Receiving Check',
      dueDate: new Date(Date.now() - 12 * 3600 * 1000).toISOString(),
      clientWaitReason: 'Client receiving dock manager verifying packaging tamper seal before signing POD.',
      clientWaitDays: 1,
      clarificationNote: '',
      category: 'Logistics',
      createdAt: new Date(Date.now() - 20 * 3600 * 1000).toISOString()
    },
    {
      id: 'OPS-4098',
      title: 'Weekly Fleet Maintenance Log Audit & Odometer Check',
      description: 'Audit 24 delivery vans against preventative maintenance schedule.',
      assignee: 'David Kim',
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFKP27d5VSLwirrIy5FoH-Tc0b-FJKit9bLMf6usfiTfYybIJBh3293dXl88-3ysxdu9IaGhcvlU-zd7mGPKjGd8rZIP-RkqJmTJIXD547Fn8DvDobsSOUSLilsxEI6nhuCMGf6U-s0ME_BdQqo-TjusOCJhcVLgUZYCYH7_QCecq6R7czVIXzgScdWcr0QNsVcq9nTe3RmdrH8DfrTtY3tB63BiNbOHslIiDuXp8gx_h66ggGmg78tA',
      priority: 'P3',
      status: 'done',
      source: 'spreadsheet',
      sourceDetail: 'Fleet_Audit_WK36.csv',
      dueDate: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
      clientWaitReason: '',
      clarificationNote: '',
      category: 'Logistics',
      createdAt: new Date(Date.now() - 72 * 3600 * 1000).toISOString(),
      completedAt: new Date(Date.now() - 10 * 3600 * 1000).toISOString()
    },
    {
      id: 'OPS-4099',
      title: 'Supplier Haulage Surcharge Reconciliation #1049',
      description: 'Reconcile $3,420 fuel haulage invoice with logistics contract agreed pricing.',
      assignee: 'Elena Rostova',
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfxrI4ELYs_7pRqpdknJ5uhT267yVsyeJx6CUZTyoVrk2O7SkuAFo49vd95ogWObAc2WHdDUJI9YG1Cl6_Vuin0Mw8db94NdHNWk2TY1FOIRqF5o1r8SMgIHT7gxg06eJlVbaBN090RXztJ14LMr1j4FNTGnMgtX-lFWA9wwtsFcmN2C5X2uXki_49Qs8IZDGw2A52ZRqa4-nXohkAL9B-F8lNkm6UQCq2fxwUoX7e8b4mkg17szpWlA',
      priority: 'P2',
      status: 'done',
      source: 'email',
      sourceDetail: 'accounts@transocean-logistics.com',
      dueDate: new Date(Date.now() - 30 * 3600 * 1000).toISOString(),
      clientWaitReason: '',
      clarificationNote: '',
      category: 'Legal & Billing',
      createdAt: new Date(Date.now() - 60 * 3600 * 1000).toISOString(),
      completedAt: new Date(Date.now() - 16 * 3600 * 1000).toISOString()
    },
    {
      id: 'OPS-4100',
      title: 'Emergency Dispatch Route Divert — Highway 101 Closure',
      description: 'Re-route 6 high-value freight trucks via Bypass 280 due to sudden bridge closure.',
      assignee: 'Marcus Vance',
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJtjmbBM5EauMpQdiam_c55utQKN3oDCWqhsyrXOkeyX-OLtibY6buXIe0Eo9ieAbjRd9a-3bhbey-B17XADfZ0aVw0_vkKqIfhWeY3kbmPq6BAT28iCFeGMBRI40qKvew6cp-Af3felKsjFR2emae5zr4FbHfEAtAy1z9Ry96y2ZPxfDyKbniOhLKQw4TTYxDp67QYbFK_9zqRs2l1GybKs19ZrSLQPZ-npLIJsJARzkVWDkCzgyCEw',
      priority: 'P0',
      status: 'in_progress',
      source: 'whatsapp',
      sourceDetail: 'Ops Emergency Broadcast Group',
      dueDate: new Date(Date.now() - 1.5 * 3600 * 1000).toISOString(), // Overdue 1.5 hours (INTERNAL OVERDUE!)
      clientWaitReason: '',
      clarificationNote: '',
      category: 'Logistics',
      createdAt: new Date(Date.now() - 3 * 3600 * 1000).toISOString()
    }
  ];

  const TEAM_MEMBERS = [
    {
      name: 'Sarah Jenkins',
      role: 'Operations Lead (Manager)',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo-E5PXu90YOprebgDH-95g23Nqgel76_fZvhPAqXbD-3uy9wpVyueWYbgzBTQW5lzRn7Yw1NXv9um_3cL835ATsjRyvA5fupXlvH1uLhrQoldJHejz7wlun_XYVpFwfg1ZgZ-43Jh0rHLqMCrYK3ZV4W2kYO3NRvF-_2BvdUCweoxM9TfgMkLAl01Y4FGXZx-6_SzgsYPivWCf2lpFLPDi00yMXGSTzsowfxJwMKU5B5X9IHyCOkU9w'
    },
    {
      name: 'Marcus Vance',
      role: 'Field Dispatch & Fleet Lead',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJtjmbBM5EauMpQdiam_c55utQKN3oDCWqhsyrXOkeyX-OLtibY6buXIe0Eo9ieAbjRd9a-3bhbey-B17XADfZ0aVw0_vkKqIfhWeY3kbmPq6BAT28iCFeGMBRI40qKvew6cp-Af3felKsjFR2emae5zr4FbHfEAtAy1z9Ry96y2ZPxfDyKbniOhLKQw4TTYxDp67QYbFK_9zqRs2l1GybKs19ZrSLQPZ-npLIJsJARzkVWDkCzgyCEw'
    },
    {
      name: 'Elena Rostova',
      role: 'Compliance & Client Accounts',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfxrI4ELYs_7pRqpdknJ5uhT267yVsyeJx6CUZTyoVrk2O7SkuAFo49vd95ogWObAc2WHdDUJI9YG1Cl6_Vuin0Mw8db94NdHNWk2TY1FOIRqF5o1r8SMgIHT7gxg06eJlVbaBN090RXztJ14LMr1j4FNTGnMgtX-lFWA9wwtsFcmN2C5X2uXki_49Qs8IZDGw2A52ZRqa4-nXohkAL9B-F8lNkm6UQCq2fxwUoX7e8b4mkg17szpWlA'
    },
    {
      name: 'David Kim',
      role: 'Supply Chain & Customs Ops',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFKP27d5VSLwirrIy5FoH-Tc0b-FJKit9bLMf6usfiTfYybIJBh3293dXl88-3ysxdu9IaGhcvlU-zd7mGPKjGd8rZIP-RkqJmTJIXD547Fn8DvDobsSOUSLilsxEI6nhuCMGf6U-s0ME_BdQqo-TjusOCJhcVLgUZYCYH7_QCecq6R7czVIXzgScdWcr0QNsVcq9nTe3RmdrH8DfrTtY3tB63BiNbOHslIiDuXp8gx_h66ggGmg78tA'
    },
    {
      name: 'Priya Patel',
      role: 'Operations Coordinator',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS6SirbPX4wyuaa9Fk1jFI277snyvy2Z1ZDZ5bo4dY3680H8w2uE4dvk6a95BKG4TYUd9Bzv0XqDuL5vN35kRPi9kfV8bUE9NQUmKfHNeg8dEcM-UspMZApJx3DzEKIodjH1AtQkwwZZSLbnGltKCn4cE27_QzQgqIy1zUerWLg4aft2R9AXAF0_VT-WvAocJKcFxexQhwMQ-pGDlxsd7x1Z6eucOKV3KGjTrLMlU0dwkgu6tP6_O3nA'
    }
  ];

  // Pipeline Status Definitions
  const PIPELINE_STATUSES = [
    { key: 'new_request', label: 'New Request', icon: 'inbox', color: 'purple' },
    { key: 'needs_clarification', label: 'Needs Clarification', icon: 'help', color: 'amber' },
    { key: 'ready_to_assign', label: 'Ready to Assign', icon: 'assignment_turned_in', color: 'sky' },
    { key: 'in_progress', label: 'In Progress', icon: 'play_arrow', color: 'blue' },
    { key: 'waiting_on_client', label: 'Waiting on Client', icon: 'hourglass_top', color: 'emerald' },
    { key: 'done', label: 'Done', icon: 'check_circle', color: 'green' }
  ];

  // --- Task Storage Controller ---
  class TaskStore {
    constructor() {
      this.storageKey = 'lalaops_tasks_v3_lifecycle';
      this.currentPersona = 'Marcus Vance'; // Default employee persona
      this.managerFilter = 'all'; // 'all' | 'waiting_for_us' | 'waiting_for_client' | 'unassigned' | 'overdue'
      this.tasks = this.loadTasks();
      this.listeners = [];
    }

    loadTasks() {
      try {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {
        console.warn('Could not read from localStorage', e);
      }
      this.saveTasks(DEFAULT_TASKS);
      return JSON.parse(JSON.stringify(DEFAULT_TASKS));
    }

    saveTasks(tasks) {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
      } catch (e) {
        console.warn('Could not save to localStorage', e);
      }
    }

    reset() {
      this.tasks = JSON.parse(JSON.stringify(DEFAULT_TASKS));
      this.saveTasks(this.tasks);
      this.notify();
    }

    subscribe(fn) {
      this.listeners.push(fn);
    }

    notify() {
      this.saveTasks(this.tasks);
      this.listeners.forEach(fn => fn(this.tasks));
    }

    getAll() {
      return this.tasks;
    }

    getById(id) {
      return this.tasks.find(t => t.id === id);
    }

    addTask(taskData) {
      const idNumber = Math.floor(4100 + Math.random() * 900);
      const isUnassigned = !taskData.assignee || taskData.assignee === 'Unassigned';

      const newTask = {
        id: `OPS-${idNumber}`,
        title: taskData.title.trim(),
        description: (taskData.description || '').trim(),
        assignee: isUnassigned ? 'Unassigned' : taskData.assignee,
        assigneeAvatar: isUnassigned ? '' : this.getAvatarForName(taskData.assignee),
        priority: taskData.priority || 'P1',
        status: taskData.status || 'new_request',
        source: taskData.source || 'whatsapp',
        sourceDetail: taskData.sourceDetail || 'Quick Intake Hub',
        dueDate: taskData.dueDate || new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
        clientWaitReason: taskData.clientWaitReason || '',
        clientWaitDays: taskData.status === 'waiting_on_client' ? 1 : 0,
        clarificationNote: taskData.clarificationNote || '',
        category: taskData.category || 'Logistics',
        createdAt: new Date().toISOString()
      };

      this.tasks.unshift(newTask);
      this.notify();
      return newTask;
    }

    updateTask(id, updates) {
      const index = this.tasks.findIndex(t => t.id === id);
      if (index !== -1) {
        if (updates.assignee) {
          if (updates.assignee === 'Unassigned') {
            updates.assigneeAvatar = '';
          } else {
            updates.assigneeAvatar = this.getAvatarForName(updates.assignee);
          }
        }
        if (updates.status === 'done' && !this.tasks[index].completedAt) {
          updates.completedAt = new Date().toISOString();
        }
        if (updates.status === 'waiting_on_client' && !this.tasks[index].clientWaitDays) {
          updates.clientWaitDays = 1;
        }

        this.tasks[index] = { ...this.tasks[index], ...updates };
        this.notify();
        return this.tasks[index];
      }
      return null;
    }

    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id);
      this.notify();
    }

    getAvatarForName(name) {
      const match = TEAM_MEMBERS.find(m => m.name.toLowerCase() === name.toLowerCase());
      if (match) return match.avatar;
      return 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo-E5PXu90YOprebgDH-95g23Nqgel76_fZvhPAqXbD-3uy9wpVyueWYbgzBTQW5lzRn7Yw1NXv9um_3cL835ATsjRyvA5fupXlvH1uLhrQoldJHejz7wlun_XYVpFwfg1ZgZ-43Jh0rHLqMCrYK3ZV4W2kYO3NRvF-_2BvdUCweoxM9TfgMkLAl01Y4FGXZx-6_SzgsYPivWCf2lpFLPDi00yMXGSTzsowfxJwMKU5B5X9IHyCOkU9w';
    }

    /**
     * Exact Operational Metrics:
     * 1. What needs to be done: total active requests
     * 2. Who is responsible: unassigned vs assigned
     * 3. What the priority is: P0 urgent count
     * 4. What the current status is: waiting for us vs waiting for client
     * 5. What has already been done: doneCount
     * 6. What needs a follow-up: needsFollowUp (client hold >= 1d, needs clarification, or overdue)
     */
    getMetrics() {
      const now = new Date();
      let waitingForUs = 0;
      let waitingForClient = 0;
      let unassigned = 0;
      let overdue = 0;
      let doneCount = 0;
      let needsFollowUp = 0;
      let p0Count = 0;

      this.tasks.forEach(t => {
        if (t.status === 'done') {
          doneCount++;
          return;
        }

        if (t.priority === 'P0') p0Count++;

        // Unassigned check
        if (!t.assignee || t.assignee === 'Unassigned') {
          unassigned++;
        }

        // Status check
        if (t.status === 'waiting_on_client') {
          waitingForClient++;
          needsFollowUp++; // Follow-up with client
        } else {
          waitingForUs++;
          if (new Date(t.dueDate) < now) {
            overdue++;
            needsFollowUp++; // Overdue chase needed
          } else if (t.status === 'needs_clarification') {
            needsFollowUp++; // Clarification needed
          }
        }
      });

      return {
        waitingForUs,
        waitingForClient,
        unassigned,
        overdue,
        doneCount,
        needsFollowUp,
        p0Count,
        activeCount: waitingForUs + waitingForClient,
        totalTasks: this.tasks.length
      };
    }
  }

  // Follow-up evaluation helper
  function getFollowUpStatus(task) {
    if (task.status === 'done') {
      return { needed: false, label: 'Already Done', type: 'done', detail: 'Completed & verified' };
    }
    if (task.status === 'waiting_on_client') {
      const days = task.clientWaitDays || 1;
      return {
        needed: true,
        label: `Client Ping (${days}d)`,
        type: 'client',
        detail: task.clientWaitReason || 'Waiting on client signature/signoff'
      };
    }
    if (task.status === 'needs_clarification') {
      return {
        needed: true,
        label: 'Clarification Needed',
        type: 'clarify',
        detail: task.clarificationNote || 'Missing specs from requester'
      };
    }
    if (!task.assignee || task.assignee === 'Unassigned') {
      return {
        needed: true,
        label: 'Needs Assignee',
        type: 'unassigned',
        detail: 'In triage queue — assign an owner'
      };
    }
    const due = new Date(task.dueDate);
    if (due < new Date()) {
      return {
        needed: true,
        label: 'Overdue Follow-up',
        type: 'overdue',
        detail: 'Target deadline breached, internal chase'
      };
    }
    return {
      needed: false,
      label: 'On Track',
      type: 'ok',
      detail: 'In progress on schedule'
    };
  }

  // Instantiate Store
  const store = new TaskStore();

  // --- UI Notifications / Toast Engine ---
  function showToast(title, message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    let icon = 'info';
    let iconColor = 'text-primary';
    let borderColor = 'border-slate-200';

    if (type === 'success') {
      icon = 'check_circle';
      iconColor = 'text-emerald-600';
      borderColor = 'border-emerald-200';
    } else if (type === 'warning' || type === 'client') {
      icon = 'hourglass_top';
      iconColor = 'text-sky-600';
      borderColor = 'border-sky-200';
    } else if (type === 'clarification') {
      icon = 'help';
      iconColor = 'text-amber-600';
      borderColor = 'border-amber-200';
    } else if (type === 'error' || type === 'overdue') {
      icon = 'error';
      iconColor = 'text-red-600';
      borderColor = 'border-red-200';
    }

    toast.classList.add(borderColor);
    toast.innerHTML = `
      <span class="material-symbols-outlined ${iconColor} text-[22px] flex-shrink-0">${icon}</span>
      <div class="flex-1 text-left overflow-hidden">
        <div class="font-semibold text-sm text-slate-900 truncate">${escapeHtml(title)}</div>
        <div class="text-xs text-slate-600 line-clamp-2">${escapeHtml(message)}</div>
      </div>
      <button class="text-slate-400 hover:text-slate-700 p-1 rounded transition-colors" onclick="this.parentElement.remove()">
        <span class="material-symbols-outlined text-[16px]">close</span>
      </button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 200);
      }
    }, 4200);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Formats SLA / Timing with explicit rule:
   * "Waiting on Client" is never treated as overdue or stale!
   */
  function formatTaskTiming(task) {
    if (task.status === 'waiting_on_client') {
      const days = task.clientWaitDays || 1;
      return {
        text: `Waiting on Client (${days}d)`,
        isOverdue: false,
        isClientWait: true,
        badgeClass: 'text-sky-700 font-medium'
      };
    }

    if (task.status === 'done') {
      return {
        text: 'Completed',
        isOverdue: false,
        isClientWait: false,
        badgeClass: 'text-emerald-700 font-medium'
      };
    }

    if (!task.dueDate) {
      return { text: 'No due date', isOverdue: false, isClientWait: false, badgeClass: 'text-slate-500' };
    }

    const due = new Date(task.dueDate);
    const now = new Date();
    const diffHours = (due.getTime() - now.getTime()) / (1000 * 3600);

    if (diffHours < 0) {
      const overdueHours = Math.abs(Math.floor(diffHours));
      return {
        text: `Overdue (${overdueHours}h ago)`,
        isOverdue: true,
        isClientWait: false,
        badgeClass: 'text-red-600 font-bold'
      };
    }
    if (diffHours <= 4) {
      return {
        text: `Due in ${Math.round(diffHours * 10) / 10}h`,
        isOverdue: false,
        isClientWait: false,
        badgeClass: 'text-amber-600 font-semibold'
      };
    }
    if (diffHours <= 24) {
      return {
        text: `Due today (${due.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`,
        isOverdue: false,
        isClientWait: false,
        badgeClass: 'text-slate-600'
      };
    }
    return {
      text: due.toLocaleDateString([], { month: 'short', day: 'numeric' }),
      isOverdue: false,
      isClientWait: false,
      badgeClass: 'text-slate-500'
    };
  }

  // --- Router / View Switcher ---
  const views = ['manager-dashboard', 'task-board', 'quick-intake', 'my-workspace', 'product-resource'];
  let currentView = 'manager-dashboard';

  function setView(viewName) {
    if (!views.includes(viewName)) viewName = 'manager-dashboard';
    currentView = viewName;

    document.querySelectorAll('.view-section').forEach(el => {
      el.classList.remove('active');
    });
    const targetSection = document.getElementById(`view-${viewName}`);
    if (targetSection) targetSection.classList.add('active');

    document.querySelectorAll('[data-path]').forEach(link => {
      const path = link.getAttribute('data-path');
      if (path === viewName) {
        link.classList.add('bg-primary-container', 'text-on-primary', 'font-semibold', 'shadow-sm');
        link.classList.remove('text-on-surface-variant', 'hover:bg-surface-container', 'hover:text-on-surface');
      } else {
        link.classList.remove('bg-primary-container', 'text-on-primary', 'font-semibold', 'shadow-sm');
        link.classList.add('text-on-surface-variant', 'hover:bg-surface-container', 'hover:text-on-surface');
      }
    });

    if (window.location.hash !== `#${viewName}`) {
      window.location.hash = viewName;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderCurrentView();

    if (viewName === 'manager-dashboard' && !isManagerUnlocked()) {
      setTimeout(() => {
        const input = document.getElementById('manager-passcode-input');
        if (input) input.focus();
      }, 150);
    }
  }

  function handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    if (views.includes(hash)) {
      setView(hash);
    } else {
      setView('manager-dashboard');
    }
  }

  // --- Manager Security & Passcode Helpers ---
  const DEFAULT_MANAGER_PASSCODE = 'ops2026';

  function getManagerPasscode() {
    return localStorage.getItem('lalaops_manager_passcode') || DEFAULT_MANAGER_PASSCODE;
  }

  function setManagerPasscode(newCode) {
    localStorage.setItem('lalaops_manager_passcode', newCode);
    updateLockScreenHint();
  }

  function updateLockScreenHint() {
    const code = getManagerPasscode();
    const hintEl = document.getElementById('lock-screen-hint-passcode');
    if (hintEl) {
      hintEl.innerText = code;
    }
    const badgeEl = document.getElementById('change-passcode-active-badge');
    if (badgeEl) {
      badgeEl.innerText = code;
    }
  }

  function isManagerUnlocked() {
    return sessionStorage.getItem('lalaops_manager_auth') === 'true';
  }

  function updateSidebarManagerLockState() {
    const lockIcon = document.getElementById('sidebar-manager-lock-icon');
    if (!lockIcon) return;
    if (isManagerUnlocked()) {
      lockIcon.innerText = 'lock_open';
      lockIcon.className = 'material-symbols-outlined text-[15px] text-emerald-600 ml-auto';
      lockIcon.title = 'Console Unlocked';
    } else {
      lockIcon.innerText = 'lock';
      lockIcon.className = 'material-symbols-outlined text-[15px] text-slate-400 ml-auto';
      lockIcon.title = 'Password Protected';
    }
  }

  // --- 1. Manager Operations Dashboard Renderer ---
  function renderManagerDashboard() {
    updateSidebarManagerLockState();
    updateLockScreenHint();

    const lockScreen = document.getElementById('manager-lock-screen');
    const unlockedContent = document.getElementById('manager-unlocked-content');

    if (!isManagerUnlocked()) {
      if (lockScreen) lockScreen.classList.remove('hidden');
      if (unlockedContent) unlockedContent.classList.add('hidden');
      return;
    }

    if (lockScreen) lockScreen.classList.add('hidden');
    if (unlockedContent) unlockedContent.classList.remove('hidden');

    const metrics = store.getMetrics();
    const tasks = store.getAll();

    // 4 Primary KPI Cards
    const elWaitingForUs = document.getElementById('kpi-waiting-for-us');
    const elWaitingForClient = document.getElementById('kpi-waiting-for-client');
    const elUnassigned = document.getElementById('kpi-unassigned');
    const elOverdue = document.getElementById('kpi-overdue');

    if (elWaitingForUs) elWaitingForUs.innerText = metrics.waitingForUs;
    if (elWaitingForClient) elWaitingForClient.innerText = metrics.waitingForClient;
    if (elUnassigned) elUnassigned.innerText = metrics.unassigned;
    if (elOverdue) elOverdue.innerText = metrics.overdue;

    // Filter tasks based on selected manager segmented tab
    let displayedTasks = tasks;
    if (store.managerFilter === 'waiting_for_us') {
      displayedTasks = tasks.filter(t => t.status !== 'done' && t.status !== 'waiting_on_client');
    } else if (store.managerFilter === 'waiting_for_client') {
      displayedTasks = tasks.filter(t => t.status === 'waiting_on_client');
    } else if (store.managerFilter === 'unassigned') {
      displayedTasks = tasks.filter(t => t.status !== 'done' && (!t.assignee || t.assignee === 'Unassigned'));
    } else if (store.managerFilter === 'overdue') {
      displayedTasks = tasks.filter(t => t.status !== 'done' && t.status !== 'waiting_on_client' && new Date(t.dueDate) < new Date());
    }

    // Render Manager Filtered List
    const listContainer = document.getElementById('manager-filtered-list');
    const listCountBadge = document.getElementById('manager-list-count-badge');
    if (listCountBadge) listCountBadge.innerText = `${displayedTasks.length} requests`;

    if (listContainer) {
      if (displayedTasks.length === 0) {
        listContainer.innerHTML = `
          <div class="p-8 text-center text-slate-500 bg-surface-container-low rounded-xl">
            <span class="material-symbols-outlined text-3xl text-slate-400 mb-1">check_circle</span>
            <p class="text-xs font-semibold">No requests currently in this bucket.</p>
          </div>
        `;
      } else {
        listContainer.innerHTML = displayedTasks.map(item => {
          const timing = formatTaskTiming(item);
          const isUnassigned = !item.assignee || item.assignee === 'Unassigned';
          const isWaitingClient = item.status === 'waiting_on_client';
          const isOverdue = timing.isOverdue;

          let statusBadgeClass = 'bg-slate-100 text-slate-700';
          if (item.status === 'new_request') statusBadgeClass = 'bg-purple-100 text-purple-800';
          else if (item.status === 'needs_clarification') statusBadgeClass = 'bg-amber-100 text-amber-800';
          else if (item.status === 'ready_to_assign') statusBadgeClass = 'bg-sky-100 text-sky-800';
          else if (item.status === 'in_progress') statusBadgeClass = 'bg-blue-100 text-blue-800';
          else if (item.status === 'waiting_on_client') statusBadgeClass = 'bg-sky-50 text-sky-800 border border-sky-200';
          else if (item.status === 'done') statusBadgeClass = 'bg-emerald-100 text-emerald-800';

          return `
            <div class="p-3.5 rounded-xl border ${isOverdue ? 'border-red-200 bg-red-50/20' : isWaitingClient ? 'border-sky-200 bg-sky-50/20' : 'border-slate-200 bg-white'} flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-sm hover:border-slate-300 transition-all cursor-pointer" onclick="if(!event.target.closest('button')) window.LalaApp.openTaskDetail('${item.id}')" data-task-id="${item.id}">
              <div class="flex items-start gap-3">
                <span class="font-code text-xs px-2 py-1 rounded bg-slate-100 font-bold text-slate-700 self-start">${item.id}</span>
                <div>
                  <div class="flex items-center gap-2 mb-1 flex-wrap">
                    <span class="text-xs font-bold text-slate-900">${escapeHtml(item.title)}</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono ${statusBadgeClass}">${item.status.replace(/_/g, ' ')}</span>
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold badge-${item.priority.toLowerCase()}">[${item.priority}]</span>
                  </div>

                  <div class="flex items-center gap-2 text-xs text-slate-600 flex-wrap">
                    <div class="flex items-center gap-1 font-medium">
                      <span class="material-symbols-outlined text-[15px] text-slate-400">person</span>
                      <span class="${isUnassigned ? 'text-purple-700 font-bold' : 'text-slate-800'}">${escapeHtml(item.assignee)}</span>
                    </div>
                    <span>•</span>
                    <span class="font-code text-[11px] ${timing.badgeClass}">
                      ${isWaitingClient ? `<span class="inline-flex items-center gap-1"><span class="material-symbols-outlined text-[13px]">hourglass_top</span>${timing.text}</span>` : timing.text}
                    </span>
                    ${item.clientWaitReason ? `
                      <span>•</span>
                      <span class="text-[11px] text-sky-800 italic truncate max-w-xs">"${escapeHtml(item.clientWaitReason)}"</span>
                    ` : ''}
                    ${item.clarificationNote ? `
                      <span>•</span>
                      <span class="text-[11px] text-amber-800 italic truncate max-w-xs">"${escapeHtml(item.clarificationNote)}"</span>
                    ` : ''}
                  </div>
                </div>
              </div>

              <!-- Quick Manager Actions -->
              <div class="flex items-center gap-1.5 self-end sm:self-auto flex-shrink-0">
                ${isUnassigned ? `
                  <button class="px-2.5 py-1 rounded bg-purple-600 hover:bg-purple-700 text-white font-mono text-xs font-semibold shadow-sm transition-all" onclick="window.LalaApp.quickAssignPrompt('${item.id}')">
                    Assign Now
                  </button>
                ` : ''}
                ${isWaitingClient ? `
                  <button class="px-2.5 py-1 rounded bg-sky-600 hover:bg-sky-700 text-white font-mono text-xs font-semibold shadow-sm transition-all flex items-center gap-1" onclick="window.LalaApp.nudgeClientFollowup('${item.id}', '${escapeHtml(item.title)}')">
                    <span class="material-symbols-outlined text-[14px]">send</span>
                    <span>Client Ping</span>
                  </button>
                  <button class="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-semibold shadow-sm transition-all" onclick="window.LalaApp.clientReplied('${item.id}')">
                    Client Replied
                  </button>
                ` : ''}
                ${isOverdue ? `
                  <button class="px-2.5 py-1 rounded bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-semibold shadow-sm transition-all" onclick="window.LalaApp.nudgeAssignee('${item.id}', '${escapeHtml(item.assignee)}')">
                    Chase Owner
                  </button>
                ` : ''}
                ${item.status === 'new_request' ? `
                  <button class="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-semibold transition-all" onclick="window.LalaApp.moveTask('${item.id}', 'ready_to_assign')">
                    Ready
                  </button>
                ` : ''}
                <button class="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors" onclick="window.LalaApp.openTaskDetail('${item.id}')">
                  View
                </button>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Team Workload Allocation
    const memberCounts = {};
    TEAM_MEMBERS.forEach(m => { memberCounts[m.name] = { active: 0, clientWait: 0, done: 0 }; });
    tasks.forEach(t => {
      if (memberCounts[t.assignee]) {
        if (t.status === 'done') memberCounts[t.assignee].done++;
        else if (t.status === 'waiting_on_client') memberCounts[t.assignee].clientWait++;
        else memberCounts[t.assignee].active++;
      }
    });

    const workloadContainer = document.getElementById('manager-team-workload');
    if (workloadContainer) {
      workloadContainer.innerHTML = TEAM_MEMBERS.slice(1).map(member => {
        const counts = memberCounts[member.name] || { active: 0, clientWait: 0, done: 0 };
        const total = counts.active;
        const widthPct = Math.min(100, Math.round((total / 5) * 100));
        const barColor = total >= 4 ? 'bg-amber-500' : 'bg-blue-600';

        return `
          <div class="flex items-center justify-between gap-3 py-2 border-b border-surface-container last:border-0">
            <div class="flex items-center gap-2">
              <img src="${member.avatar}" alt="${member.name}" class="w-7 h-7 rounded-full object-cover">
              <div>
                <div class="font-label-md font-semibold text-slate-800 text-xs">${member.name}</div>
                <div class="text-[11px] text-slate-500">${member.role}</div>
              </div>
            </div>
            <div class="flex items-center gap-3 w-44">
              <div class="flex-1 bg-surface-container h-2 rounded-full overflow-hidden">
                <div class="${barColor} h-full rounded-full transition-all duration-300" style="width: ${widthPct}%"></div>
              </div>
              <span class="font-code text-xs font-semibold text-slate-700 w-14 text-right">
                ${counts.active} us / ${counts.clientWait} cli
              </span>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // --- 2. Team Task Board Renderer (6 Kanban Columns & Table) ---
  let currentTaskFilter = 'all';
  let currentViewMode = 'kanban';

  function renderTaskBoard() {
    const tasks = store.getAll();
    const filteredTasks = filterTasks(tasks, currentTaskFilter);

    const kanbanView = document.getElementById('board-kanban-container');
    const tableView = document.getElementById('board-table-container');

    if (currentViewMode === 'kanban') {
      if (kanbanView) kanbanView.classList.remove('hidden');
      if (tableView) tableView.classList.add('hidden');
      renderKanbanColumns(filteredTasks);
    } else {
      if (kanbanView) kanbanView.classList.add('hidden');
      if (tableView) tableView.classList.remove('hidden');
      renderTaskTable(filteredTasks);
    }

    updateFilterCounts(tasks);
  }

  function filterTasks(tasks, filter) {
    const searchVal = (document.getElementById('global-search-input')?.value || '').toLowerCase().trim();

    return tasks.filter(task => {
      if (searchVal) {
        const matchesSearch =
          task.title.toLowerCase().includes(searchVal) ||
          task.id.toLowerCase().includes(searchVal) ||
          task.assignee.toLowerCase().includes(searchVal) ||
          (task.description && task.description.toLowerCase().includes(searchVal));
        if (!matchesSearch) return false;
      }

      const followUp = getFollowUpStatus(task);

      if (filter === 'my-tasks') return task.assignee === store.currentPersona;
      if (filter === 'waiting-us') return task.status !== 'done' && task.status !== 'waiting_on_client';
      if (filter === 'waiting-client') return task.status === 'waiting_on_client';
      if (filter === 'unassigned') return !task.assignee || task.assignee === 'Unassigned';
      if (filter === 'overdue') return task.status !== 'done' && task.status !== 'waiting_on_client' && new Date(task.dueDate) < new Date();
      if (filter === 'needs-followup') return followUp.needed;
      if (filter === 'already-done') return task.status === 'done';
      if (filter === 'p0') return task.priority === 'P0';
      if (filter === 'whatsapp') return task.source === 'whatsapp';
      if (filter === 'email') return task.source === 'email';
      return true;
    });
  }

  function updateFilterCounts(tasks) {
    const metrics = store.getMetrics();
    const countAll = document.getElementById('pill-count-all');
    const countMy = document.getElementById('pill-count-my');
    const countWaitingUs = document.getElementById('pill-count-waiting-us');
    const countWaitingClient = document.getElementById('pill-count-waiting-client');
    const countUnassigned = document.getElementById('pill-count-unassigned');
    const countOverdue = document.getElementById('pill-count-overdue');
    const countFollowup = document.getElementById('pill-count-followup');
    const countDone = document.getElementById('pill-count-done');

    if (countAll) countAll.innerText = tasks.length;
    if (countMy) countMy.innerText = tasks.filter(t => t.assignee === store.currentPersona).length;
    if (countWaitingUs) countWaitingUs.innerText = metrics.waitingForUs;
    if (countWaitingClient) countWaitingClient.innerText = metrics.waitingForClient;
    if (countUnassigned) countUnassigned.innerText = metrics.unassigned;
    if (countOverdue) countOverdue.innerText = metrics.overdue;
    if (countFollowup) countFollowup.innerText = metrics.needsFollowUp;
    if (countDone) countDone.innerText = metrics.doneCount;

    // Update 6 Essentials Bar Counters
    const essWhat = document.getElementById('ess-count-what');
    const essWho = document.getElementById('ess-count-who');
    const essPriority = document.getElementById('ess-count-priority');
    const essStatus = document.getElementById('ess-count-status');
    const essFollowup = document.getElementById('ess-count-followup');
    const essDone = document.getElementById('ess-count-done');

    if (essWhat) essWhat.innerText = `${metrics.activeCount} Active`;
    if (essWho) essWho.innerText = `${metrics.unassigned} Unassigned`;
    if (essPriority) essPriority.innerText = `${metrics.p0Count} Urgent P0`;
    if (essStatus) essStatus.innerText = `${metrics.waitingForUs} Us / ${metrics.waitingForClient} Client`;
    if (essFollowup) essFollowup.innerText = `${metrics.needsFollowUp} Pending`;
    if (essDone) essDone.innerText = `${metrics.doneCount} Closed`;
  }

  function renderKanbanColumns(tasks) {
    const statusKeys = ['new_request', 'needs_clarification', 'ready_to_assign', 'in_progress', 'waiting_on_client', 'done'];

    const colElements = {};
    const countElements = {};

    statusKeys.forEach(k => {
      const domId = `col-${k.replace(/_/g, '-')}`;
      colElements[k] = document.getElementById(domId);
      countElements[k] = document.getElementById(`count-${domId}`);
      if (colElements[k]) colElements[k].innerHTML = '';
    });

    const counts = { new_request: 0, needs_clarification: 0, ready_to_assign: 0, in_progress: 0, waiting_on_client: 0, done: 0 };

    tasks.forEach(task => {
      const colKey = task.status || 'new_request';
      if (colElements[colKey]) {
        counts[colKey]++;
        colElements[colKey].appendChild(createKanbanCard(task));
      }
    });

    statusKeys.forEach(k => {
      if (countElements[k]) countElements[k].innerText = counts[k];
    });
  }

  function createKanbanCard(task) {
    const card = document.createElement('div');
    const isWaitingClient = task.status === 'waiting_on_client';
    const isUnassigned = !task.assignee || task.assignee === 'Unassigned';
    const timing = formatTaskTiming(task);

    card.className = `kanban-card elevation-1 rounded-xl p-3 flex flex-col gap-2.5 relative bg-white transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300 duration-150 ${isWaitingClient ? 'card-waiting-client' : isUnassigned ? 'card-unassigned' : timing.isOverdue ? 'card-overdue' : ''}`;
    card.setAttribute('draggable', 'true');
    card.setAttribute('data-task-id', task.id);

    const sourceIcon = task.source === 'whatsapp' ? 'chat' : task.source === 'email' ? 'mail' : 'description';
    const sourceClass = task.source === 'whatsapp' ? 'badge-whatsapp' : task.source === 'email' ? 'badge-email' : 'badge-manual';
    const priorityClass = `badge-${task.priority.toLowerCase()}`;

    card.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1.5">
          <span class="font-code text-[11px] px-1.5 py-0.5 rounded font-bold text-slate-700 bg-slate-100">${task.id}</span>
          <span class="px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase ${sourceClass} flex items-center gap-1">
            <span class="material-symbols-outlined text-[12px]">${sourceIcon}</span>${task.source}
          </span>
        </div>
        <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${priorityClass}">[${task.priority}]</span>
      </div>

      <div class="text-[13px] font-semibold text-slate-900 leading-snug line-clamp-2">
        ${escapeHtml(task.title)}
      </div>

      <!-- Specific Contexts for Waiting on Client or Needs Clarification -->
      ${isWaitingClient && task.clientWaitReason ? `
        <div class="p-2 rounded-lg bg-sky-50/90 border border-sky-200 text-sky-900 text-[11px] flex items-start gap-1.5">
          <span class="material-symbols-outlined text-sky-600 text-[14px] flex-shrink-0 mt-0.5">hourglass_top</span>
          <span class="line-clamp-2">${escapeHtml(task.clientWaitReason)}</span>
        </div>
      ` : ''}

      ${task.status === 'needs_clarification' && task.clarificationNote ? `
        <div class="p-2 rounded-lg bg-amber-50/90 border border-amber-200 text-amber-900 text-[11px] flex items-start gap-1.5">
          <span class="material-symbols-outlined text-amber-600 text-[14px] flex-shrink-0 mt-0.5">help</span>
          <span class="line-clamp-2">${escapeHtml(task.clarificationNote)}</span>
        </div>
      ` : ''}

      <!-- Clean Single Footer Row -->
      <div class="pt-2 mt-0.5 border-t border-slate-100 flex items-center justify-between gap-1.5 text-xs">
        <div class="flex items-center gap-1.5 min-w-0">
          ${isUnassigned ? `
            <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px]">?</span>
            <span class="font-bold text-purple-700 text-[11px]">Unassigned</span>
          ` : `
            <img src="${task.assigneeAvatar}" alt="${task.assignee}" class="w-5 h-5 rounded-full object-cover ring-1 ring-slate-200" title="${task.assignee}">
            <span class="truncate max-w-[80px] font-medium text-slate-700 text-[11px]">${escapeHtml(task.assignee.split(' ')[0])}</span>
          `}
        </div>

        <div class="flex items-center gap-1 flex-shrink-0">
          <span class="font-code text-[10px] ${timing.badgeClass}">
            ${timing.text}
          </span>
          <select class="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded text-[10px] font-medium text-slate-600 px-1 py-0.5 focus:outline-none cursor-pointer" title="Quick change stage" onclick="event.stopPropagation()" onchange="event.stopPropagation(); window.LalaApp.moveTask('${task.id}', this.value)">
            <option value="new_request" ${task.status === 'new_request' ? 'selected' : ''}>New</option>
            <option value="needs_clarification" ${task.status === 'needs_clarification' ? 'selected' : ''}>Clarify</option>
            <option value="ready_to_assign" ${task.status === 'ready_to_assign' ? 'selected' : ''}>Ready</option>
            <option value="in_progress" ${task.status === 'in_progress' ? 'selected' : ''}>In Prog</option>
            <option value="waiting_on_client" ${task.status === 'waiting_on_client' ? 'selected' : ''}>Client</option>
            <option value="done" ${task.status === 'done' ? 'selected' : ''}>Done</option>
          </select>
        </div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('select') || e.target.closest('button')) return;
      window.LalaApp.openTaskDetail(task.id);
    });

    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', task.id);
      card.classList.add('opacity-50');
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('opacity-50');
    });

    return card;
  }

  function renderTaskTable(tasks) {
    const tableBody = document.getElementById('board-table-body');
    if (!tableBody) return;

    if (tasks.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="7" class="p-8 text-center text-slate-500 font-medium">No requests found matching current filter.</td></tr>`;
      return;
    }

    tableBody.innerHTML = tasks.map(task => {
      const timing = formatTaskTiming(task);
      const isUnassigned = !task.assignee || task.assignee === 'Unassigned';
      const isDone = task.status === 'done';
      const sourceClass = task.source === 'whatsapp' ? 'badge-whatsapp' : task.source === 'email' ? 'badge-email' : 'badge-manual';
      const statusClass = `badge-${task.status}`;
      const followUp = getFollowUpStatus(task);

      let followUpBadge = '';
      if (followUp.needed) {
        const badgeBg = followUp.type === 'client' ? 'bg-sky-100 text-sky-800 border-sky-200' :
                        followUp.type === 'overdue' ? 'bg-red-100 text-red-800 border-red-200' :
                        followUp.type === 'clarify' ? 'bg-amber-100 text-amber-800 border-amber-200' : 'bg-purple-100 text-purple-800 border-purple-200';
        followUpBadge = `
          <div>
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold border ${badgeBg}">
              <span class="material-symbols-outlined text-[12px]">notification_important</span>
              ${followUp.label}
            </span>
            <div class="text-[10px] text-slate-500 truncate max-w-xs mt-0.5">${escapeHtml(followUp.detail)}</div>
          </div>
        `;
      } else if (isDone) {
        followUpBadge = `<span class="text-[11px] font-semibold text-emerald-700 inline-flex items-center gap-1"><span class="material-symbols-outlined text-[13px]">check_circle</span>Already Done</span>`;
      } else {
        followUpBadge = `<span class="text-[11px] text-slate-500 inline-flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>On Track</span>`;
      }

      return `
        <tr class="border-b border-slate-100 hover:bg-slate-50/80 transition-colors text-xs font-body-md text-slate-700 cursor-pointer" onclick="if(!event.target.closest('button')) window.LalaApp.openTaskDetail('${task.id}')">
          <!-- 1. What Needs to be Done -->
          <td class="px-3.5 py-3">
            <div class="flex items-center gap-1.5 mb-1">
              <span class="font-code font-bold text-primary text-[11px]">${task.id}</span>
              <span class="px-1.5 py-0.2 rounded text-[10px] font-semibold uppercase ${sourceClass}">${task.source}</span>
            </div>
            <div class="font-bold text-slate-900 leading-snug">${escapeHtml(task.title)}</div>
            <div class="text-[11px] text-slate-500 truncate max-w-sm mt-0.5">${escapeHtml(task.description || '')}</div>
          </td>

          <!-- 2. Who is Responsible -->
          <td class="px-3.5 py-3">
            <div class="flex items-center gap-1.5">
              ${isUnassigned ? `
                <button onclick="window.LalaApp.quickAssignPrompt('${task.id}')" class="px-2 py-1 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 font-bold text-[11px] flex items-center gap-1 transition-colors">
                  <span class="material-symbols-outlined text-[13px]">person_add</span>
                  <span>Assign Owner</span>
                </button>
              ` : `
                <img src="${task.assigneeAvatar}" alt="${task.assignee}" class="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200">
                <span class="font-semibold text-slate-800">${escapeHtml(task.assignee)}</span>
              `}
            </div>
          </td>

          <!-- 3. What the Priority is -->
          <td class="px-3.5 py-3">
            <span class="px-2 py-0.5 rounded font-code font-bold badge-${task.priority.toLowerCase()}">[${task.priority}]</span>
          </td>

          <!-- 4. What the Current Status is -->
          <td class="px-3.5 py-3">
            <span class="px-2 py-0.5 rounded text-[11px] font-bold uppercase font-mono ${statusClass}">
              ${task.status.replace(/_/g, ' ')}
            </span>
          </td>

          <!-- 5. What Needs a Follow-up -->
          <td class="px-3.5 py-3">
            ${followUpBadge}
          </td>

          <!-- 6. Target / Done Date -->
          <td class="px-3.5 py-3 font-code ${timing.badgeClass}">
            ${timing.text}
          </td>

          <!-- Quick Actions -->
          <td class="px-3.5 py-3">
            <div class="flex items-center gap-1.5">
              <button class="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-[11px] font-semibold transition-colors" onclick="window.LalaApp.openTaskDetail('${task.id}')">
                Details
              </button>
              ${task.status === 'waiting_on_client' ? `
                <button class="px-2 py-1 rounded bg-sky-600 hover:bg-sky-700 text-white font-mono text-[11px] font-semibold transition-colors" onclick="window.LalaApp.nudgeClientFollowup('${task.id}', '${escapeHtml(task.title)}')">
                  Ping Client
                </button>
              ` : !isDone ? `
                <button class="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[11px] font-semibold transition-colors" onclick="window.LalaApp.moveTask('${task.id}', 'done')">
                  Done
                </button>
              ` : `
                <span class="text-slate-400 text-xs font-mono">Closed</span>
              `}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  // --- 3. Employee Workspace / My Tasks Renderer ---
  function renderMyWorkspace() {
    const tasks = store.getAll();
    const myTasks = tasks.filter(t => t.assignee === store.currentPersona);

    const personaTitle = document.getElementById('my-workspace-title');
    const personaSubtitle = document.getElementById('my-workspace-subtitle');
    if (personaTitle) personaTitle.innerText = `Good day, ${store.currentPersona.split(' ')[0]}!`;

    const overdueCount = myTasks.filter(t => t.status !== 'done' && t.status !== 'waiting_on_client' && new Date(t.dueDate) < new Date()).length;
    const clientWaitCount = myTasks.filter(t => t.status === 'waiting_on_client').length;

    if (personaSubtitle) {
      personaSubtitle.innerHTML = `
        You have <strong class="text-primary font-semibold">${myTasks.length} active requests</strong> assigned.
        ${overdueCount > 0 ? `<span class="text-red-600 font-semibold inline-flex items-center gap-0.5"><span class="material-symbols-outlined text-[16px]">error</span> ${overdueCount} overdue</span>` : `<span class="text-emerald-700 font-semibold">All internal milestones on schedule.</span>`}
        ${clientWaitCount > 0 ? `• <span class="text-sky-700 font-medium">${clientWaitCount} waiting on client approval</span>` : ''}
      `;
    }

    const countOverdue = document.getElementById('emp-kpi-overdue');
    const countToday = document.getElementById('emp-kpi-today');
    const countWaitingClient = document.getElementById('emp-kpi-blocked');
    const countDone = document.getElementById('emp-kpi-done');

    if (countOverdue) countOverdue.innerText = overdueCount;
    if (countToday) countToday.innerText = myTasks.filter(t => t.status === 'in_progress').length;
    if (countWaitingClient) countWaitingClient.innerText = clientWaitCount;
    if (countDone) countDone.innerText = myTasks.filter(t => t.status === 'done').length;

    const listContainer = document.getElementById('my-tasks-action-list');
    if (listContainer) {
      if (myTasks.length === 0) {
        listContainer.innerHTML = `
          <div class="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
            <span class="material-symbols-outlined text-4xl text-slate-400 mb-2">task_alt</span>
            <p class="font-medium">No tasks currently assigned to you. Enjoy the clear board!</p>
          </div>
        `;
        return;
      }

      // Sort: Overdue first, then In Progress, then Ready to Assign, then Needs Clarification, then Waiting on Client, then Done
      const sorted = [...myTasks].sort((a, b) => {
        const aOverdue = a.status !== 'done' && a.status !== 'waiting_on_client' && new Date(a.dueDate) < new Date();
        const bOverdue = b.status !== 'done' && b.status !== 'waiting_on_client' && new Date(b.dueDate) < new Date();
        if (aOverdue && !bOverdue) return -1;
        if (!aOverdue && bOverdue) return 1;
        if (a.status === 'in_progress' && b.status !== 'in_progress') return -1;
        if (a.status !== 'in_progress' && b.status === 'in_progress') return 1;
        if (a.status === 'waiting_on_client' && b.status !== 'waiting_on_client') return 1;
        if (a.status !== 'waiting_on_client' && b.status === 'waiting_on_client') return -1;
        return 0;
      });

      listContainer.innerHTML = sorted.map(task => {
        const timing = formatTaskTiming(task);
        const isDone = task.status === 'done';
        const isWaitingClient = task.status === 'waiting_on_client';
        const isInProgress = task.status === 'in_progress';

        return `
          <div class="p-4 rounded-xl border ${isWaitingClient ? 'border-sky-300 bg-sky-50/30' : timing.isOverdue ? 'border-red-200 bg-red-50/30' : 'border-slate-200 bg-white'} shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-md cursor-pointer hover:border-slate-300" onclick="if(!event.target.closest('button')) window.LalaApp.openTaskDetail('${task.id}')">
            <div class="flex items-start gap-3">
              <button class="mt-1 w-5 h-5 rounded border ${isDone ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 hover:border-primary'} flex items-center justify-center transition-colors" onclick="window.LalaApp.toggleTaskDone('${task.id}')">
                ${isDone ? '<span class="material-symbols-outlined text-[14px]">check</span>' : ''}
              </button>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-code text-xs px-1.5 py-0.5 rounded bg-slate-100 font-bold text-slate-700">${task.id}</span>
                  <span class="px-1.5 py-0.5 rounded text-[10px] font-bold badge-${task.priority.toLowerCase()}">[${task.priority}]</span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono badge-${task.status}">${task.status.replace(/_/g, ' ')}</span>
                  <span class="font-label-md font-semibold text-slate-900 ${isDone ? 'line-through text-slate-400' : ''}">${escapeHtml(task.title)}</span>
                </div>
                <p class="text-xs text-slate-600 mt-1 line-clamp-1">${escapeHtml(task.description || 'No extended description')}</p>

                ${isWaitingClient && task.clientWaitReason ? `
                  <div class="mt-2 text-xs font-medium text-sky-800 bg-sky-100/80 px-2.5 py-1 rounded inline-flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[14px] text-sky-700">hourglass_top</span>
                    <span><strong>Client Hold:</strong> ${escapeHtml(task.clientWaitReason)}</span>
                  </div>
                ` : ''}

                ${task.clarificationNote ? `
                  <div class="mt-2 text-xs font-medium text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded inline-flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[14px] text-amber-700">help</span>
                    <span><strong>Clarification Note:</strong> ${escapeHtml(task.clarificationNote)}</span>
                  </div>
                ` : ''}
              </div>
            </div>

            <div class="flex items-center gap-3 self-end md:self-auto">
              <div class="text-right">
                <div class="font-code text-xs ${timing.badgeClass}">${timing.text}</div>
                <div class="text-[10px] text-slate-400 uppercase font-medium">Source: ${task.source}</div>
              </div>

              <div class="flex items-center gap-1.5">
                <button class="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs transition-all" onclick="window.LalaApp.openTaskDetail('${task.id}')">
                  Details
                </button>

                ${!isDone ? `
                  ${!isInProgress ? `
                    <button class="px-2.5 py-1.5 rounded-lg bg-primary text-white hover:bg-primary-container text-xs font-semibold shadow-sm transition-all" onclick="window.LalaApp.moveTask('${task.id}', 'in_progress')">
                      Start Progress
                    </button>
                  ` : `
                    <button class="px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-semibold shadow-sm transition-all" onclick="window.LalaApp.moveTask('${task.id}', 'done')">
                      Mark Done
                    </button>
                  `}

                  ${!isWaitingClient ? `
                    <button class="px-2.5 py-1.5 rounded-lg border border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-semibold transition-all flex items-center gap-1" onclick="window.LalaApp.promptWaitingOnClient('${task.id}')">
                      <span class="material-symbols-outlined text-[14px]">hourglass_top</span>
                      <span>Wait on Client</span>
                    </button>
                  ` : `
                    <button class="px-2.5 py-1.5 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold transition-all" onclick="window.LalaApp.clientReplied('${task.id}')">
                      Client Replied
                    </button>
                  `}
                ` : `
                  <span class="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px]">verified</span> Completed
                  </span>
                `}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 4. Global View Dispatcher
  function renderCurrentView() {
    renderManagerDashboard();
    renderTaskBoard();
    renderMyWorkspace();
  }

  // --- Smart WhatsApp / Email Parser ---
  function parseUnstructuredMessage(text) {
    if (!text || text.trim().length === 0) return null;

    const lower = text.toLowerCase();

    // Detect Assignee or Unassigned
    let detectedAssignee = 'Unassigned';
    for (const member of TEAM_MEMBERS) {
      const firstName = member.name.split(' ')[0].toLowerCase();
      if (lower.includes(firstName) || lower.includes(member.name.toLowerCase())) {
        detectedAssignee = member.name;
        break;
      }
    }

    // Detect Priority
    let detectedPriority = 'P2';
    if (lower.includes('urgent') || lower.includes('asap') || lower.includes('emergency') || lower.includes('immediately') || lower.includes('p0')) {
      detectedPriority = 'P0';
    } else if (lower.includes('high') || lower.includes('important') || lower.includes('p1') || lower.includes('today')) {
      detectedPriority = 'P1';
    } else if (lower.includes('low') || lower.includes('when you can') || lower.includes('p3')) {
      detectedPriority = 'P3';
    }

    // Detect Lifecycle Stage
    let detectedStatus = 'new_request';
    if (lower.includes('waiting on client') || lower.includes('awaiting client') || lower.includes('client approval')) {
      detectedStatus = 'waiting_on_client';
    } else if (lower.includes('unclear') || lower.includes('clarify') || lower.includes('missing details')) {
      detectedStatus = 'needs_clarification';
    } else if (detectedAssignee !== 'Unassigned') {
      detectedStatus = 'ready_to_assign';
    }

    // Detect Due Date
    let dueDate = new Date(Date.now() + 4 * 3600 * 1000);
    if (lower.includes('noon') || lower.includes('12pm')) {
      dueDate.setHours(12, 0, 0, 0);
    } else if (lower.includes('4pm') || lower.includes('4:00 pm') || lower.includes('16:00')) {
      dueDate.setHours(16, 0, 0, 0);
    } else if (lower.includes('6pm') || lower.includes('18:00')) {
      dueDate.setHours(18, 0, 0, 0);
    } else if (lower.includes('tomorrow')) {
      dueDate = new Date(Date.now() + 24 * 3600 * 1000);
    }

    let cleanTitle = text.trim();
    cleanTitle = cleanTitle.replace(/^(urgent|fwd|re|hey|hi|please):\s*/i, '');
    if (cleanTitle.length > 70) {
      cleanTitle = cleanTitle.slice(0, 67) + '...';
    }

    return {
      title: cleanTitle,
      description: text.trim(),
      assignee: detectedAssignee,
      priority: detectedPriority,
      status: detectedStatus,
      dueDate: dueDate.toISOString(),
      source: 'whatsapp'
    };
  }

  // --- Waiting on Client Modal Controller ---
  let activeClientWaitTaskId = null;
  let activeDetailTaskId = null;

  function openWaitingOnClientModal(taskId) {
    activeClientWaitTaskId = taskId;
    const modal = document.getElementById('waiting-client-modal');
    const task = store.getById(taskId);
    if (!modal || !task) return;

    const titleEl = document.getElementById('client-wait-task-title');
    if (titleEl) titleEl.innerText = `${task.id}: ${task.title}`;

    const reasonInput = document.getElementById('client-wait-reason-input');
    if (reasonInput) {
      reasonInput.value = task.clientWaitReason || '';
      reasonInput.focus();
    }

    modal.classList.remove('hidden');
  }

  function closeWaitingOnClientModal() {
    const modal = document.getElementById('waiting-client-modal');
    if (modal) modal.classList.add('hidden');
    activeClientWaitTaskId = null;
  }

  function submitWaitingOnClient() {
    if (!activeClientWaitTaskId) return;
    const reasonInput = document.getElementById('client-wait-reason-input');
    const reason = reasonInput ? reasonInput.value.trim() : 'Waiting for client feedback/approval';

    store.updateTask(activeClientWaitTaskId, {
      status: 'waiting_on_client',
      clientWaitReason: reason,
      clientWaitDays: 1
    });

    closeWaitingOnClientModal();
    showToast('Moved to Waiting on Client', `Request ${activeClientWaitTaskId} is parked on client response. Will not count as internal overdue.`, 'client');
  }

  // --- Public API for Global & Inline Triggers ---
  window.LalaApp = {
    setView,
    setManagerFilter: (filterName) => {
      store.managerFilter = filterName;
      document.querySelectorAll('.mgr-filter-btn').forEach(btn => {
        if (btn.getAttribute('data-mgr-filter') === filterName) {
          btn.className = 'mgr-filter-btn px-3 py-1.5 rounded-lg bg-primary-container text-white font-mono text-xs font-semibold shadow-sm transition-all';
        } else {
          btn.className = 'mgr-filter-btn px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 font-mono text-xs transition-colors';
        }
      });
      renderManagerDashboard();
    },
    resetData: () => {
      if (confirm('Reset all requests back to original demo state?')) {
        store.reset();
        showToast('Demo Reset', 'Tasks successfully reloaded to initial Lala Tech pipeline.', 'info');
      }
    },
    moveTask: (id, newStatus) => {
      const task = store.updateTask(id, { status: newStatus });
      if (task) {
        showToast('Stage Updated', `${task.id} moved to ${newStatus.replace(/_/g, ' ').toUpperCase()}`, 'success');
      }
    },
    promptWaitingOnClient: (id) => {
      openWaitingOnClientModal(id);
    },
    clientReplied: (id) => {
      const task = store.updateTask(id, { status: 'in_progress', clientWaitReason: '' });
      if (task) {
        showToast('Client Replied', `${task.id} returned to internal team (In Progress).`, 'success');
      }
    },
    quickAssignPrompt: (id) => {
      const task = store.getById(id);
      if (!task) return;
      const member = prompt(`Assign ${task.id} to which team member?\n(Marcus Vance, Elena Rostova, David Kim, Priya Patel):`, 'Marcus Vance');
      if (member && member.trim()) {
        store.updateTask(id, { assignee: member.trim(), status: 'in_progress' });
        showToast('Assigned', `${task.id} assigned to ${member.trim()} and moved to In Progress!`, 'success');
      }
    },
    nudgeClientFollowup: (id, title) => {
      showToast('Client Follow-up Sent', `Automated gentle reminder ping dispatched for: "${title}".`, 'client');
    },
    nudgeAssignee: (id, assignee) => {
      showToast('Internal Nudge Dispatched', `Urgent reminder ping sent to ${assignee} via WhatsApp/Email!`, 'overdue');
    },
    toggleTaskDone: (id) => {
      const task = store.getById(id);
      if (task) {
        const nextStatus = task.status === 'done' ? 'in_progress' : 'done';
        store.updateTask(id, { status: nextStatus });
        if (nextStatus === 'done') {
          showToast('Request Closed', `Great job! ${task.id} marked as closed.`, 'success');
        }
      }
    },
    switchPersona: (name) => {
      store.currentPersona = name;
      renderCurrentView();
      showToast('Persona Switched', `Now viewing workspace as ${name}`, 'info');
    },
    // Manager Security & Passcode Handlers
    handleManagerLogin: (e) => {
      if (e) e.preventDefault();
      const input = document.getElementById('manager-passcode-input');
      const err = document.getElementById('manager-auth-error');
      const card = document.querySelector('#manager-lock-screen .lock-card');
      const val = (input ? input.value : '').trim();
      const activePasscode = getManagerPasscode();

      // Accepted passcodes: current custom passcode, default ops2026, or master admin
      if (val === activePasscode || val === 'admin' || val === DEFAULT_MANAGER_PASSCODE) {
        if (err) err.classList.add('hidden');
        sessionStorage.setItem('lalaops_manager_auth', 'true');
        updateSidebarManagerLockState();
        showToast('Manager Console Unlocked', 'Access to triage, queue, and capacity controls granted.', 'success');
        renderManagerDashboard();
      } else {
        if (err) err.classList.remove('hidden');
        if (card) {
          card.classList.add('shake-error');
          setTimeout(() => card.classList.remove('shake-error'), 400);
        }
        if (input) {
          input.focus();
          input.select();
        }
      }
    },
    quickFillManagerPasscode: () => {
      const input = document.getElementById('manager-passcode-input');
      if (input) {
        input.value = getManagerPasscode();
        window.LalaApp.handleManagerLogin(new Event('submit'));
      }
    },
    lockManagerDashboard: () => {
      sessionStorage.removeItem('lalaops_manager_auth');
      updateSidebarManagerLockState();
      showToast('Console Locked', 'Manager Operations session locked.', 'info');
      renderManagerDashboard();
    },
    openChangePasscodeModal: () => {
      const modal = document.getElementById('change-passcode-modal');
      const errBox = document.getElementById('change-passcode-error');
      const currentInput = document.getElementById('change-passcode-current');
      const newInput = document.getElementById('change-passcode-new');
      const confirmInput = document.getElementById('change-passcode-confirm');
      const activeBadge = document.getElementById('change-passcode-active-badge');
      const activePasscode = getManagerPasscode();

      if (errBox) errBox.classList.add('hidden');
      if (activeBadge) activeBadge.innerText = activePasscode;
      
      // Pre-fill active passcode for effortless usability
      if (currentInput) {
        currentInput.value = activePasscode;
        currentInput.type = 'password';
      }
      if (newInput) {
        newInput.value = '';
        newInput.type = 'password';
      }
      if (confirmInput) {
        confirmInput.value = '';
        confirmInput.type = 'password';
      }

      if (modal) {
        modal.classList.remove('hidden');
        setTimeout(() => {
          if (newInput) newInput.focus();
        }, 60);
      }
    },
    closeChangePasscodeModal: () => {
      const modal = document.getElementById('change-passcode-modal');
      if (modal) modal.classList.add('hidden');
      const errBox = document.getElementById('change-passcode-error');
      if (errBox) errBox.classList.add('hidden');
    },
    submitChangePasscode: (e) => {
      if (e) e.preventDefault();
      const errBox = document.getElementById('change-passcode-error');
      const errMsg = document.getElementById('change-passcode-error-msg');
      const currentInput = document.getElementById('change-passcode-current');
      const newInput = document.getElementById('change-passcode-new');
      const confirmInput = document.getElementById('change-passcode-confirm');

      const currentVal = (currentInput ? currentInput.value : '').trim();
      const newVal = (newInput ? newInput.value : '').trim();
      const confirmVal = (confirmInput ? confirmInput.value : '').trim();
      const activePasscode = getManagerPasscode();

      const showError = (msg) => {
        if (errBox && errMsg) {
          errMsg.innerText = msg;
          errBox.classList.remove('hidden');
        } else {
          showToast('Passcode Error', msg, 'error');
        }
      };

      // 1. Validate current passcode: if entered, must match active passcode, default ops2026, or master admin
      if (currentVal && currentVal !== activePasscode && currentVal !== 'admin' && currentVal !== DEFAULT_MANAGER_PASSCODE) {
        showError(`Current passcode does not match. (Active code: ${activePasscode})`);
        if (currentInput) { currentInput.focus(); currentInput.select(); }
        return;
      }

      // 2. Validate new passcode length (minimum 3 characters)
      if (!newVal || newVal.length < 3) {
        showError('New passcode must be at least 3 characters long.');
        if (newInput) { newInput.focus(); }
        return;
      }

      // 3. Validate confirmation match
      if (newVal !== confirmVal) {
        showError('New passcode and confirmation do not match.');
        if (confirmInput) { confirmInput.focus(); confirmInput.select(); }
        return;
      }

      // Success: Save new passcode
      setManagerPasscode(newVal);

      // Auto-unlock manager dashboard session so the user gets immediate access
      sessionStorage.setItem('lalaops_manager_auth', 'true');
      const lockInput = document.getElementById('manager-passcode-input');
      if (lockInput) lockInput.value = newVal;

      updateLockScreenHint();
      updateSidebarManagerLockState();
      renderManagerDashboard();

      window.LalaApp.closeChangePasscodeModal();
      showToast('Passcode Updated & Dashboard Unlocked', `Manager passcode set to "${newVal}". Console unlocked!`, 'success');
    },
    resetPasscodeToDefault: () => {
      localStorage.removeItem('lalaops_manager_passcode');
      updateLockScreenHint();
      const lockInput = document.getElementById('manager-passcode-input');
      if (lockInput) lockInput.value = DEFAULT_MANAGER_PASSCODE;
      const currentInput = document.getElementById('change-passcode-current');
      if (currentInput) currentInput.value = DEFAULT_MANAGER_PASSCODE;
      const activeBadge = document.getElementById('change-passcode-active-badge');
      if (activeBadge) activeBadge.innerText = DEFAULT_MANAGER_PASSCODE;

      window.LalaApp.closeChangePasscodeModal();
      showToast('Passcode Restored', 'Manager passcode restored to default: ops2026', 'info');
    },
    togglePasscodeVisibility: (inputId, btn) => {
      const input = document.getElementById(inputId);
      if (!input) return;
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      if (btn) {
        const icon = btn.querySelector('.material-symbols-outlined');
        if (icon) icon.innerText = isPassword ? 'visibility_off' : 'visibility';
      }
    },
    togglePasswordVisibility: (inputId, btn) => {
      window.LalaApp.togglePasscodeVisibility(inputId, btn);
    },
    openTaskDetail: (id) => {
      const task = store.getById(id);
      if (!task) return;
      activeDetailTaskId = task.id;

      const modal = document.getElementById('task-detail-modal');
      if (!modal) return;

      // Header Elements
      const idEl = document.getElementById('detail-task-id');
      const srcBadge = document.getElementById('detail-task-source-badge');
      const srcIcon = document.getElementById('detail-task-source-icon');
      const srcLabel = document.getElementById('detail-task-source-label');
      const priBadge = document.getElementById('detail-task-priority-badge');
      const staBadge = document.getElementById('detail-task-status-badge');
      const titleEl = document.getElementById('detail-task-title');
      const srcDetailEl = document.getElementById('detail-task-source-detail');
      const descEl = document.getElementById('detail-task-description');
      const createdEl = document.getElementById('detail-task-created');
      const dueTextEl = document.getElementById('detail-task-due-text');
      const catEl = document.getElementById('detail-task-category');

      if (idEl) idEl.innerText = task.id;
      if (titleEl) titleEl.innerText = task.title;
      if (srcDetailEl) srcDetailEl.innerText = `Stream: ${task.sourceDetail || task.source} • Ingested via ${task.source.toUpperCase()}`;
      if (descEl) descEl.innerText = task.description || 'No additional message details.';

      const timing = formatTaskTiming(task);
      if (dueTextEl) {
        dueTextEl.innerHTML = `<span class="${timing.badgeClass}">${timing.text}</span> <span class="text-slate-400 font-normal">(${new Date(task.dueDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}, ${new Date(task.dueDate).toLocaleDateString()})</span>`;
      }
      if (catEl) catEl.innerText = task.category || 'Operations';
      if (createdEl) {
        const createdDate = new Date(task.createdAt || Date.now());
        createdEl.innerText = `Ingested: ${createdDate.toLocaleDateString()} at ${createdDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
      }

      // Source Badge
      if (srcLabel) srcLabel.innerText = task.source;
      if (srcIcon) srcIcon.innerText = task.source === 'whatsapp' ? 'chat' : task.source === 'email' ? 'mail' : 'description';
      if (srcBadge) {
        srcBadge.className = `px-2.5 py-1 rounded text-[11px] font-semibold uppercase ${task.source === 'whatsapp' ? 'badge-whatsapp' : task.source === 'email' ? 'badge-email' : 'badge-manual'} flex items-center gap-1`;
      }

      // Priority Badge & Select
      if (priBadge) {
        priBadge.innerText = `[${task.priority}]`;
        priBadge.className = `px-2 py-0.5 rounded text-[11px] font-mono font-bold badge-${task.priority.toLowerCase()}`;
      }
      const priSelect = document.getElementById('detail-task-priority-select');
      if (priSelect) priSelect.value = task.priority;

      // Status Badge & Select
      if (staBadge) {
        let statusBadgeClass = 'bg-slate-100 text-slate-700';
        if (task.status === 'new_request') statusBadgeClass = 'bg-purple-100 text-purple-800';
        else if (task.status === 'needs_clarification') statusBadgeClass = 'bg-amber-100 text-amber-800';
        else if (task.status === 'ready_to_assign') statusBadgeClass = 'bg-sky-100 text-sky-800';
        else if (task.status === 'in_progress') statusBadgeClass = 'bg-blue-100 text-blue-800';
        else if (task.status === 'waiting_on_client') statusBadgeClass = 'bg-sky-50 text-sky-800 border border-sky-200';
        else if (task.status === 'done') statusBadgeClass = 'bg-emerald-100 text-emerald-800';
        staBadge.className = `px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase ${statusBadgeClass}`;
        staBadge.innerText = task.status.replace(/_/g, ' ');
      }
      const staSelect = document.getElementById('detail-task-status-select');
      if (staSelect) staSelect.value = task.status;

      // Assignee Info & Select
      const asgName = document.getElementById('detail-task-assignee-name');
      const asgRole = document.getElementById('detail-task-assignee-role');
      const asgAvatar = document.getElementById('detail-task-assignee-avatar');
      const asgSelect = document.getElementById('detail-task-assignee-select');

      const member = TEAM_MEMBERS.find(m => m.name === task.assignee);
      if (asgName) asgName.innerText = task.assignee || 'Unassigned';
      if (asgRole) asgRole.innerText = member ? member.role : 'Queue Triage';
      if (asgAvatar) {
        asgAvatar.src = task.assigneeAvatar || (member ? member.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=faces');
      }
      if (asgSelect) asgSelect.value = task.assignee || 'Unassigned';

      // Waiting on Client Section
      const clientSection = document.getElementById('detail-task-client-section');
      const clientReason = document.getElementById('detail-task-client-reason');
      const clientDays = document.getElementById('detail-task-client-days');
      const clientRepliedBtn = document.getElementById('detail-task-client-replied-btn');
      const clientPingBtn = document.getElementById('detail-task-client-ping-btn');

      if (task.status === 'waiting_on_client') {
        if (clientSection) clientSection.classList.remove('hidden');
        if (clientReason) clientReason.innerText = task.clientWaitReason || 'Awaiting formal client feedback or countersignature.';
        if (clientDays) clientDays.innerText = `${task.clientWaitDays || 1} day(s) on hold`;
        if (clientRepliedBtn) {
          clientRepliedBtn.onclick = () => {
            window.LalaApp.clientReplied(task.id);
            window.LalaApp.openTaskDetail(task.id);
          };
        }
        if (clientPingBtn) {
          clientPingBtn.onclick = () => {
            window.LalaApp.nudgeClientFollowup(task.id, task.title);
          };
        }
      } else {
        if (clientSection) clientSection.classList.add('hidden');
      }

      // Needs Clarification Section
      const clarifySection = document.getElementById('detail-task-clarify-section');
      const clarifyNote = document.getElementById('detail-task-clarify-note');
      if (task.status === 'needs_clarification' && task.clarificationNote) {
        if (clarifySection) clarifySection.classList.remove('hidden');
        if (clarifyNote) clarifyNote.innerText = task.clarificationNote;
      } else {
        if (clarifySection) clarifySection.classList.add('hidden');
      }

      // Quick Actions on Right
      const doneBtn = document.getElementById('detail-task-done-btn');
      const doneText = document.getElementById('detail-task-done-text');
      const waitBtn = document.getElementById('detail-task-wait-btn');
      const nudgeBtn = document.getElementById('detail-task-nudge-btn');

      if (doneText) doneText.innerText = task.status === 'done' ? 'Re-open Request' : 'Mark as Done';
      if (doneBtn) {
        doneBtn.onclick = () => {
          window.LalaApp.toggleTaskDone(task.id);
          window.LalaApp.openTaskDetail(task.id);
        };
      }
      if (waitBtn) {
        waitBtn.style.display = task.status === 'waiting_on_client' ? 'none' : 'flex';
        waitBtn.onclick = () => {
          window.LalaApp.closeTaskDetailModal();
          window.LalaApp.promptWaitingOnClient(task.id);
        };
      }
      if (nudgeBtn) {
        nudgeBtn.onclick = () => {
          window.LalaApp.nudgeAssignee(task.id, task.assignee);
        };
      }

      modal.classList.remove('hidden');
    },
    closeTaskDetailModal: () => {
      const modal = document.getElementById('task-detail-modal');
      if (modal) modal.classList.add('hidden');
      activeDetailTaskId = null;
    },
    updateDetailStatus: (newStatus) => {
      if (!activeDetailTaskId) return;
      if (newStatus === 'waiting_on_client') {
        window.LalaApp.closeTaskDetailModal();
        window.LalaApp.promptWaitingOnClient(activeDetailTaskId);
        return;
      }
      store.updateTask(activeDetailTaskId, { status: newStatus });
      window.LalaApp.openTaskDetail(activeDetailTaskId);
      showToast('Status Updated', `Request status changed to ${newStatus.replace(/_/g, ' ').toUpperCase()}`, 'success');
    },
    updateDetailAssignee: (newAssignee) => {
      if (!activeDetailTaskId) return;
      const member = TEAM_MEMBERS.find(m => m.name === newAssignee);
      store.updateTask(activeDetailTaskId, {
        assignee: newAssignee,
        assigneeAvatar: member ? member.avatar : ''
      });
      window.LalaApp.openTaskDetail(activeDetailTaskId);
      showToast('Assignee Updated', `Request assigned to ${newAssignee}`, 'info');
    },
    updateDetailPriority: (newPriority) => {
      if (!activeDetailTaskId) return;
      store.updateTask(activeDetailTaskId, { priority: newPriority });
      window.LalaApp.openTaskDetail(activeDetailTaskId);
      showToast('Priority Updated', `Priority set to ${newPriority}`, 'info');
    },
    populateSampleWhatsApp: (index) => {
      const samples = [
        "Inbound quote request: Flatbed transport for South Terminal expansion. Need initial specs before assigning.",
        "URGENT: EuroCargo port release #882 needs customs broker clearance today! Marcus please take this.",
        "Client Apex Ltd requesting revised credit limit for 50k order. Contract sent to client CFO, awaiting their signature."
      ];
      const input = document.getElementById('rawInput');
      if (input && samples[index]) {
        input.value = samples[index];
        window.LalaApp.previewParse();
      }
    },
    previewParse: () => {
      const input = document.getElementById('rawInput');
      if (!input) return;
      const parsed = parseUnstructuredMessage(input.value);
      if (!parsed) return;

      const previewBox = document.getElementById('smart-parse-preview');
      if (previewBox) {
        previewBox.classList.remove('hidden');
        document.getElementById('preview-title').value = parsed.title;
        document.getElementById('preview-assignee').value = parsed.assignee;
        document.getElementById('preview-priority').value = parsed.priority;
        document.getElementById('preview-status').value = parsed.status;
        document.getElementById('preview-due').value = parsed.dueDate.slice(0, 16);
      }
    },
    commitParsedTask: () => {
      const title = document.getElementById('preview-title')?.value;
      const assignee = document.getElementById('preview-assignee')?.value;
      const priority = document.getElementById('preview-priority')?.value;
      const status = document.getElementById('preview-status')?.value;
      const due = document.getElementById('preview-due')?.value;

      if (!title || !due) {
        alert('Guardrail Warning: Title and Target Due Date are mandatory!');
        return;
      }

      const newTask = store.addTask({
        title,
        description: document.getElementById('rawInput')?.value || '',
        assignee: assignee || 'Unassigned',
        priority,
        status: status || 'new_request',
        dueDate: new Date(due).toISOString(),
        source: 'whatsapp',
        sourceDetail: 'WhatsApp Chat Smart Parse'
      });

      showToast('Request Ingested', `Request ${newTask.id} created in "${status.replace(/_/g, ' ')}" state!`, 'success');

      const rawInput = document.getElementById('rawInput');
      if (rawInput) rawInput.value = '';
      const previewBox = document.getElementById('smart-parse-preview');
      if (previewBox) previewBox.classList.add('hidden');

      setTimeout(() => setView('task-board'), 400);
    }
  };

  // --- Event Listeners Initialization ---
  document.addEventListener('DOMContentLoaded', () => {
    updateSidebarManagerLockState();
    updateLockScreenHint();
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    store.subscribe(() => {
      renderCurrentView();
    });

    // Batch chase button
    const batchNudgeBtn = document.getElementById('trigger-batch-chase');
    if (batchNudgeBtn) {
      batchNudgeBtn.addEventListener('click', () => {
        const orig = batchNudgeBtn.innerHTML;
        batchNudgeBtn.disabled = true;
        batchNudgeBtn.innerHTML = '<span class="material-symbols-outlined text-[16px] animate-spin">refresh</span><span>Checking SLAs...</span>';
        setTimeout(() => {
          batchNudgeBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">done_all</span><span>Pings Sent!</span>';
          showToast('Internal Overdue Alerts Sent', 'Reminders sent to all overdue internal assignees. (Requests waiting on client were skipped per policy).', 'success');
          setTimeout(() => {
            batchNudgeBtn.innerHTML = orig;
            batchNudgeBtn.disabled = false;
          }, 2400);
        }, 900);
      });
    }

    // View Switcher (Kanban vs Table)
    const btnKanban = document.getElementById('view-kanban-btn');
    const btnTable = document.getElementById('view-table-btn');
    if (btnKanban && btnTable) {
      btnKanban.addEventListener('click', () => {
        currentViewMode = 'kanban';
        btnKanban.className = 'flex items-center gap-space-xs px-space-md py-1 bg-surface-container-lowest text-primary rounded-md font-label-md text-label-md font-semibold shadow-sm transition-all';
        btnTable.className = 'flex items-center gap-space-xs px-space-md py-1 text-on-surface-variant hover:text-on-surface rounded-md font-label-md text-label-md transition-all';
        renderTaskBoard();
      });
      btnTable.addEventListener('click', () => {
        currentViewMode = 'table';
        btnTable.className = 'flex items-center gap-space-xs px-space-md py-1 bg-surface-container-lowest text-primary rounded-md font-label-md text-label-md font-semibold shadow-sm transition-all';
        btnKanban.className = 'flex items-center gap-space-xs px-space-md py-1 text-on-surface-variant hover:text-on-surface rounded-md font-label-md text-label-md transition-all';
        renderTaskBoard();
      });
    }

    // Board Filter Pills
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(p => {
          p.classList.remove('bg-primary-container', 'text-white', 'active', 'shadow-xs');
          p.classList.add('text-slate-600');
        });
        pill.classList.add('bg-primary-container', 'text-white', 'active', 'shadow-xs');
        pill.classList.remove('text-slate-600');

        const filter = pill.getAttribute('data-filter') || 'all';
        currentTaskFilter = filter;
        renderTaskBoard();
      });
    });

    // Global Search
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        renderTaskBoard();
      });
    }

    // Drag-and-drop column listeners for all 6 columns
    ['new_request', 'needs_clarification', 'ready_to_assign', 'in_progress', 'waiting_on_client', 'done'].forEach(colStatus => {
      const col = document.getElementById(`col-${colStatus.replace(/_/g, '-')}`);
      if (col) {
        col.addEventListener('dragover', (e) => {
          e.preventDefault();
          col.classList.add('drag-over');
        });
        col.addEventListener('dragleave', () => {
          col.classList.remove('drag-over');
        });
        col.addEventListener('drop', (e) => {
          e.preventDefault();
          col.classList.remove('drag-over');
          const taskId = e.dataTransfer.getData('text/plain');
          if (taskId) {
            store.updateTask(taskId, { status: colStatus });
            showToast('Pipeline Advanced', `${taskId} transitioned to ${colStatus.replace(/_/g, ' ').toUpperCase()}`, 'success');
          }
        });
      }
    });

    // Waiting on Client modal bindings
    const waitModalClose = document.getElementById('client-wait-modal-cancel');
    const waitModalSubmit = document.getElementById('client-wait-modal-submit');
    if (waitModalClose) waitModalClose.addEventListener('click', closeWaitingOnClientModal);
    if (waitModalSubmit) waitModalSubmit.addEventListener('click', submitWaitingOnClient);

    // Direct Task Intake Form
    const directForm = document.getElementById('direct-intake-form');
    if (directForm) {
      directForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('direct-task-title')?.value;
        const assignee = document.getElementById('direct-task-assignee')?.value;
        const priority = document.getElementById('direct-task-priority')?.value;
        const status = document.getElementById('direct-task-status')?.value || 'new_request';
        const due = document.getElementById('direct-task-due')?.value;
        const source = document.getElementById('direct-task-source')?.value || 'manual';

        if (!title || !due) {
          alert('Guardrail Warning: Mandatory title and due date required.');
          return;
        }

        const task = store.addTask({
          title,
          assignee: assignee || 'Unassigned',
          priority,
          status,
          dueDate: new Date(due).toISOString(),
          source
        });

        showToast('New Request Created', `Successfully logged ${task.id} in ${status.replace(/_/g, ' ')}!`, 'success');
        directForm.reset();
        setView('task-board');
      });
    }

    // Persona Switcher in Header
    const personaSelect = document.getElementById('persona-switcher-select');
    if (personaSelect) {
      personaSelect.addEventListener('change', (e) => {
        window.LalaApp.switchPersona(e.target.value);
      });
    }

    // Global Shortcuts (⌘K / Ctrl+K for search, Escape to close modals)
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const searchBar = document.getElementById('global-search-input');
        if (searchBar) {
          searchBar.focus();
          searchBar.select();
        }
      } else if (e.key === 'Escape') {
        window.LalaApp.closeTaskDetailModal();
        window.LalaApp.closeChangePasscodeModal();
        closeWaitingOnClientModal();
      }
    });

    // Initial Render
    renderCurrentView();
  });
})();
