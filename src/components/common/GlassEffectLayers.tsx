interface GlassEffectLayersProps {
  GlassFilter: React.ComponentType;
  GlassOverlay: React.ComponentType<any>;
  GlassSpecular: React.ComponentType;
  overlayProps?: Record<string, any>;
}

export const GlassEffectLayers = ({ 
  GlassFilter, 
  GlassOverlay, 
  GlassSpecular,
  overlayProps = {}
}: GlassEffectLayersProps) => (
  <>
    <GlassFilter />
    <GlassOverlay {...overlayProps} />
    <GlassSpecular />
  </>
);