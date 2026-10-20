import React, {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const emailServiceId = process.env.EMAILJS_SERVICE_ID;
const emailTemplateId = process.env.EMAILJS_WATER_SOFTENER_TEMPLATE_ID;
const emailPublicKey = process.env.EMAILJS_PUBLIC_KEY;

const residentialFields = [
  {name: 'hardness', label: 'Water hardness (gpg)', type: 'number'},
  {name: 'iron', label: 'Iron count (ppm)', type: 'number'},
  {name: 'people', label: 'Number of people in the home', type: 'number'},
  {name: 'bathrooms', label: 'Number of bathrooms', type: 'number'},
  {name: 'dishwashers', label: 'Number of dishwashers', type: 'number'},
  {name: 'humidifiers', label: 'Number of piped humidifiers', type: 'number'},
  {name: 'tubs', label: 'Number of soaking or whirlpool tubs', type: 'number'},
  {name: 'supply', label: 'Cold water supply line size'}
];

const commercialFields = [
  {name: 'usage', label: 'Water usage (gallons)', type: 'text', hint: 'Specify gallons per day or per month.'},
  {name: 'hardness', label: 'Water hardness (gpg)', type: 'number'},
  {name: 'iron', label: 'Iron count (ppm)', type: 'number'},
  {name: 'tannin', label: 'Tannin count (ppm)', type: 'number'},
  {name: 'inlet', label: 'Pipe size going into softener'},
  {name: 'outlet', label: 'Pipe size going out of softener'},
  {name: 'seating', label: 'Food establishments: number of employees and customer seats'},
  {name: 'media', label: 'Replacement equipment: media tank dimensions', type: 'text', hint: 'Fiberglass: floor to top. Steel: side shell, weld to weld. Include tank diameter (width).'},
  {name: 'header', label: 'Existing header pipe size and control valves'},
  {name: 'brine', label: 'Brine tank height and diameter', type: 'text', hint: 'Measure from floor to top of tank and across its width.'},
  {name: 'toilets', label: 'Number of toilets', type: 'number'},
  {name: 'urinals', label: 'Number of urinals', type: 'number'},
  {name: 'sinks', label: 'Number of sinks', type: 'number'},
  {name: 'showers', label: 'Number of showers', type: 'number'},
  {name: 'dishwashers', label: 'Number of commercial dishwashers', type: 'number'},
  {name: 'washers', label: 'Number of washing machines in laundry facility', type: 'number'},
  {name: 'occupants', label: 'Number of employees, students, and faculty in the building', type: 'number'}
];

const WaterSoftenerModal = function({type, onClose}) {
  const dialog = useRef(null);
  const sending = useRef(false);
  const [status, setStatus] = useState('idle');
  const commercial = type === 'commercial';
  const title = `${commercial ? 'Commercial' : 'Residential'} Water Softener Sizing Request`;

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    dialog.current.showModal();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  const renderField = function({name, label, type = 'text', hint, required = false}) {
    const id = `softener-${name}`;

    return (
      <label className='softenerField' key={name} htmlFor={id}>
        <span>{label}{required ? ' *' : ''}</span>
        <input
          id={id}
          name={label}
          type={type}
          required={required}
          min={type === 'number' ? '0' : undefined}
          step={type === 'number' ? 'any' : undefined}
          aria-describedby={hint ? `${id}-hint` : undefined}
        />
        {hint && <small id={`${id}-hint`}>{hint}</small>}
      </label>
    );
  };

  const submit = async function(event) {
    event.preventDefault();
    if (sending.current || status === 'success') return;

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setStatus('unconfigured');
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    const answers = Array.from(data, ([label, value]) => {
      return `${label}: ${String(value).trim() || 'Not provided'}`;
    }).join('\r\n');

    sending.current = true;
    setStatus('sending');

    try {
      await emailjs.send(emailServiceId, emailTemplateId, {
        to_email: 'quotes@dsshowley.com',
        subject: title,
        request_type: commercial ? 'Commercial' : 'Residential',
        from_name: String(data.get(commercial ? 'Contact name' : 'Name')).trim(),
        reply_to: String(data.get('Email')).trim(),
        phone: String(data.get('Contact number')).trim(),
        message: answers
      }, {publicKey: emailPublicKey});
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    } finally {
      sending.current = false;
    }
  };

  const closeBackdrop = function(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialog}
      className='softenerModal'
      aria-labelledby='softener-modal-title'
      onCancel={onClose}
      onClick={closeBackdrop}
    >
      <div className='softenerModalContent'>
        <header className='softenerModalHeader'>
          <h2 id='softener-modal-title'>{title}</h2>
          <button type='button' className='softenerClose' onClick={onClose} aria-label='Close sizing request'>
            ×
          </button>
        </header>
        <p>Tell us about your project. Fields marked * are required; leave unknown measurements blank.</p>
        <form onSubmit={submit} aria-busy={status === 'sending'}>
          <fieldset disabled={status === 'sending' || status === 'success'}>
            <legend>Contact information</legend>
            <div className='softenerGrid'>
              {commercial && renderField({name: 'business', label: 'Name of business', required: true})}
              {commercial && renderField({name: 'address', label: 'Address (include city, state, ZIP code)', required: true})}
              {renderField({name: 'name', label: commercial ? 'Contact name' : 'Name', required: true})}
              {renderField({name: 'email', label: 'Email', type: 'email', required: true})}
              {renderField({name: 'phone', label: 'Contact number', type: 'tel', required: true})}
              {commercial && renderField({name: 'job', label: 'Job name', required: true})}
            </div>
          </fieldset>
          <fieldset disabled={status === 'sending' || status === 'success'}>
            <legend>Water and system details</legend>
            <div className='softenerGrid'>
              {commercial && (
                <>
                  <label className='softenerField' htmlFor='softener-source'>
                    Water type
                    <select id='softener-source' name='Water type' defaultValue=''>
                      <option value=''>Select if known</option>
                      <option>Well Water</option>
                      <option>City Water</option>
                    </select>
                  </label>
                  <label className='softenerField' htmlFor='softener-treatment'>
                    Water to be treated
                    <select id='softener-treatment' name='Water to be treated' defaultValue=''>
                      <option value=''>Select if known</option>
                      <option>BOTH Hot and Cold Water</option>
                      <option>Cold Water ONLY</option>
                      <option>Hot Water ONLY</option>
                    </select>
                  </label>
                </>
              )}
              {(commercial ? commercialFields : residentialFields).map((field) => {
                return renderField(field);
              })}
            </div>
          </fieldset>
          <p className='softenerEmailNote'>
            Submit your request directly to our team at quotes@dsshowley.com.
          </p>
          {status === 'success' && (
            <p role='status'>Your sizing request has been sent. Our team will contact you soon.</p>
          )}
          {(status === 'error' || status === 'unconfigured') && (
            <p role='alert'>
              {status === 'unconfigured'
                ? 'Online requests are temporarily unavailable.'
                : 'Your request could not be sent. Please try again.'}
              {' '}Your answers are still here. You can also email{' '}
              <a href='mailto:quotes@dsshowley.com'>quotes@dsshowley.com</a>.
            </p>
          )}
          <div className='softenerActions'>
            <button type='button' className='linkButton' onClick={onClose}>
              {status === 'success' ? 'Close' : 'Cancel'}
            </button>
            <button type='submit' className='linkButton' disabled={status === 'sending' || status === 'success'}>
              {status === 'sending' ? 'Sending…' : status === 'success' ? 'Request Sent' : 'Send Sizing Request'}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default WaterSoftenerModal;
