import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
  jsonLd?: Record<string, unknown>;
}

function setMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function Seo({ title, description, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;

    if (description) {
      setMetaTag('description', description);
      setMetaTag('og:description', description, 'property');
      setMetaTag('twitter:description', description);
    }

    setMetaTag('og:title', title, 'property');
    setMetaTag('twitter:title', title);
    setMetaTag('og:type', 'website', 'property');

    const jsonLdId = 'json-ld-person';
    let script = document.getElementById(jsonLdId) as HTMLScriptElement | null;

    if (jsonLd) {
      if (!script) {
        script = document.createElement('script');
        script.id = jsonLdId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, description, jsonLd]);

  return null;
}

export default Seo;
