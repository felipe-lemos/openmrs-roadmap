import { RichText, URLInputButton } from "@wordpress/block-editor";
import { Button, TextControl, PanelBody } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

const Edit = ({ attributes, setAttributes }) => {
	const {
		tag,
		heading,
		description,
		buttonText,
		buttonUrl,
		releases = [],
	} = attributes;

	const updateRelease = (index, field, value) => {
		const newReleases = [...releases];
		newReleases[index][field] = value;
		setAttributes({ releases: newReleases });
	};

	const addRelease = () => {
		setAttributes({
			releases: [
				...releases,
				{ version: "New Release", desc: "Release description" },
			],
		});
	};

	const removeRelease = (index) => {
		const newReleases = releases.filter((_, i) => i !== index);
		setAttributes({ releases: newReleases });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Button Link" initialOpen={false}>
					<URLInputButton
						url={buttonUrl}
						onChange={(url) => setAttributes({ buttonUrl: url })}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="padding-global">
				<div className="container-large">
					<div className="padding-section-medium">
						<div className="timeline18_component">
							<div className="margin-bottom margin-xxlarge display-inlineflex">
								<div className="max-width-large align-center">
									<div className="text-align-center">
										<div className="margin-bottom margin-xsmall flex">
											<div className="tag is-teal">
												<div className="text-size-small text-color-teal">
													<RichText
														tagName="span"
														value={tag}
														onChange={(val) => setAttributes({ tag: val })}
														placeholder="Roadmap"
													/>
												</div>
											</div>
										</div>
										<div className="margin-bottom margin-small">
											<RichText
												tagName="h2"
												className="heading-style-h2 text-align-left"
												value={heading}
												onChange={(val) => setAttributes({ heading: val })}
												placeholder="Collaborating on shared needs"
											/>
										</div>
										<RichText
											tagName="p"
											className="text-size-medium text-align-left"
											value={description}
											onChange={(val) => setAttributes({ description: val })}
											placeholder="See what’s coming up and suggest new features or functionality."
										/>
										<div className="margin-top margin-medium flex">
											<div className="button-group is-center">
												<a
													href={buttonUrl}
													className="button is-link is-icon w-inline-block"
												>
													<RichText
														tagName="div"
														value={buttonText}
														onChange={(val) =>
															setAttributes({ buttonText: val })
														}
														placeholder="Go to our roadmap"
													/>
													<div className="icon-embed-xxsmall w-embed">
														<svg
															width="16"
															height="16"
															viewBox="0 0 16 16"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M6 3L11 8L6 13"
																stroke="CurrentColor"
																strokeWidth="1.5"
															></path>
														</svg>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="timeline17_content">
							<div className="timeline17_fade-overlay-left"></div>
							<div className="timeline17_list">
								{releases.map((item, i) => (
									<div className="timeline17_item" key={i}>
										<div className="timeline17_progress-wrapper">
											<div className="timeline17_progress-line is-small-mobile"></div>
											<div className="timeline17_circle"></div>
											<div className="timeline17_progress-line"></div>
										</div>
										<div className="timeline17_item-content">
											<div className="margin-bottom margin-xxsmall">
												<RichText
													tagName="h3"
													className="heading-style-h6"
													value={item.version}
													onChange={(val) => updateRelease(i, "version", val)}
													placeholder="Release version"
												/>
											</div>
											<RichText
												tagName="p"
												value={item.desc}
												onChange={(val) => updateRelease(i, "desc", val)}
												placeholder="Release description"
											/>
											<Button
												isDestructive
												variant="link"
												onClick={() => removeRelease(i)}
												style={{ marginTop: "0.5rem" }}
											>
												Remove
											</Button>
										</div>
									</div>
								))}
							</div>
							<Button
								isPrimary
								variant="secondary"
								onClick={addRelease}
								style={{ margin: "1rem 0" }}
							>
								Add Release
							</Button>
							<div className="timeline17_fade-overlay-right"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Edit;
