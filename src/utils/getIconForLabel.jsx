import {
  Droplet,
  Waves,
  Trash2,
  FlaskConical,
  Filter,
  Activity,
  ShieldCheck,
  History,
  Users,
  Target,
  Award,
  Handshake,
  Building2,
  HardHat,
  Settings,
  PenTool,
  Lightbulb
} from 'lucide-react';

/**
 * Maps an icon string to an appropriate lucide-react icon component
 * @param {string} iconName - The icon identifier
 * @returns {JSX.Element} - The corresponding icon component
 */
export const getIconForLabel = (iconName) => {
  const iconMap = {
    // About icons
    'about': <Target className="w-4 h-4" />,
    'journey': <History className="w-4 h-4" />,
    'values': <ShieldCheck className="w-4 h-4" />,
    'certification': <Award className="w-4 h-4" />,
    'clients': <Users className="w-4 h-4" />,
    'partner': <Handshake className="w-4 h-4" />,
    
    // Products icons
    'pool': <Droplet className="w-4 h-4" />,
    'water-treatment': <Waves className="w-4 h-4" />,
    'sewage': <Trash2 className="w-4 h-4" />,
    'effluent': <FlaskConical className="w-4 h-4" />,
    'reverse-osmosis': <Filter className="w-4 h-4" />,
    'lake': <Droplet className="w-4 h-4" />,
    'ultra-filtration': <Filter className="w-4 h-4" />,
    'membrane-reactor': <Activity className="w-4 h-4" />,
    'fluidized-reactor': <Activity className="w-4 h-4" />,
    'bio': <Activity className="w-4 h-4" />,
    'sequencing': <Activity className="w-4 h-4" />,
    'equipment': <Settings className="w-4 h-4" />,
    
    // Projects icon
    'project': <Building2 className="w-4 h-4" />,
    
    // Services icon
    'service': <PenTool className="w-4 h-4" />,
  };
  
  return iconMap[iconName] || <Building2 className="w-4 h-4" />;
};
