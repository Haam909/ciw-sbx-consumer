from consumer import dump


def test_uses_the_package_from_azure_artifacts():
    assert dump({"a": 1}) == "a = 1\n"
