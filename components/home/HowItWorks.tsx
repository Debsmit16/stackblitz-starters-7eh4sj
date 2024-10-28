import { 
  ShoppingCartIcon, 
  UserGroupIcon, 
  ChatBubbleBottomCenterTextIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Browse & Purchase',
    description: 'Explore a wide variety of fresh, locally-sourced products from farmers in your area.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Connect with Farmers',
    description: 'Build direct relationships with local farmers and support sustainable agriculture.',
    icon: UserGroupIcon,
  },
  {
    name: 'Secure Communication',
    description: 'Chat directly with farmers about their products and arrange deliveries.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export function HowItWorks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to connect with local farmers
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            WasteRev makes it easy to discover and purchase fresh produce directly from local farmers while reducing food waste.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}